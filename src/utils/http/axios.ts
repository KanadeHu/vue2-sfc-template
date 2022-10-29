import type { AxiosInstance, AxiosRequestConfig, HeadersDefaults } from 'axios'
import axios from 'axios'

export class KAxios<T extends AxiosRequestConfig> {
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

  //   private getTransform() {}

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

  //   private setupIntercaptors() {}
}
