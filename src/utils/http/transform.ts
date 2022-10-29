import type { AxiosRequestConfig, AxiosResponse } from 'axios'

import type { RequestOption, Result } from '#/axios'

export interface AxiosRequestConfigByTransform extends AxiosRequestConfig {
  transform?: AxiosTransform
  requestOptions: RequestOption
}

export interface AxiosTransform {
  /**
   * @description 请求之前操作
   */
  beformRequestHook?: (config: AxiosRequestConfig, options: RequestOption) => AxiosRequestConfig
  /**
   * @description 返回数据处理逻辑
   */
  transformResponseHook?: (res: AxiosResponse<Result>, options: RequestOption) => any
  /**
   * @description 请求异常、错误处理逻辑
   */
  requestFailHook?: (e: Error, options: RequestOption) => Promise<any>
  /**
   * @description 请求发动拦截操作
   */
  requestInterceptors?: (config: AxiosRequestConfig, options: AxiosRequestConfigByTransform) => AxiosRequestConfig
  /**
   * @description 请求拦截错误处理逻辑
   */
  requestInterceptorsErrorCatch?: (e: Error) => void
  /**
   * @description 响应拦截器
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>
  /**
   * @description 响应拦截错误处理
   */
  responseInterceptorsErrorCatch?: (res: AxiosResponse, e: Error) => void
}
