/* eslint-disable class-methods-use-this */
import type { AxiosRequestConfig, Canceler } from 'axios'
import axios from 'axios'

import { isFunction } from '../is'

let peddingMap = new Map<string, Canceler>()

const getPenddingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join('&')

export class AxiosCancel {
  public addPendding(config: AxiosRequestConfig) {
    this.removePendding(config)

    const url = getPenddingUrl(config)
    // eslint-disable-next-line no-param-reassign
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken(cancel => {
        if (peddingMap.has(url)) {
          peddingMap.set(url, cancel)
        }
      })
  }

  public removeAllPendding() {
    peddingMap.forEach((cancel: Canceler) => {
      if (cancel && isFunction(cancel)) {
        cancel()
      }
    })
    peddingMap.clear()
  }

  public removePendding(config: AxiosRequestConfig) {
    const url = getPenddingUrl(config)

    if (!peddingMap.has(url)) {
      return
    }

    const cancel = peddingMap.get(url)
    if (cancel) {
      cancel(url)
    }
    peddingMap.delete(url)
  }

  /**
   * reset
   */
  public reset() {
    peddingMap = new Map<string, Canceler>()
  }
}
