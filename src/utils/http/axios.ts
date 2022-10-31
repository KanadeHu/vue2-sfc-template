import type { AxiosInstance, AxiosRequestConfig, HeadersDefaults } from 'axios'
import axios from 'axios'

import { AxiosCancel } from './axiosCancel'
import type { AxiosRequestConfigByTransform } from './transform'

export class KAxios<T extends AxiosRequestConfigByTransform> {
  private axiosInstance: AxiosInstance

  private readonly options: T

  constructor(options: T) {
    this.options = options
    this.axiosInstance = axios.create(options)
  }

  private createAxios(options: T) {
    this.createAxios(options)
  }

  public getAxios(): AxiosInstance {
    return this.axiosInstance
  }

  private getTransform() {
    const { transform } = this.options
    return transform
  }

  public configAxios(options: T) {
    if (!this.axiosInstance) {
      return
    }
    this.createAxios(options)
  }

  public setHeader(headers: HeadersDefaults) {
    if (!this.axiosInstance) {
      return
    }
    Object.assign(this.axiosInstance.defaults.headers, headers)
  }

  private setupIntercaptors() {
    const transform = this.getTransform()
    if (!transform) {
      return
    }
    const { requestInterceptors, requestInterceptorsErrorCatch, responseInterceptors, responseInterceptorsErrorCatch } =
      transform

    const canceler = new AxiosCancel()

    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfigByTransform) => {
      const { ignoreCancelToken } = config.requestOptions
      // 是否要增加canceltoken
      let ignoreCancel: boolean = true

      if (ignoreCancelToken !== undefined) {
        ignoreCancel = ignoreCancelToken
      } else {
        ignoreCancel = !!this.options.requestOptions?.ignoreCancelToken
      }
      // 增加请求取消功能
      if (!ignoreCancel) {
        canceler.addPendding(config)
      }
      
      if (requestInterceptors)
    })
  }
}
