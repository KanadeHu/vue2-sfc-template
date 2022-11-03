import type { AxiosRequestConfig } from 'axios'

/**
 * @description 接口返回数据格式预定义(根据后台实际数据定义)
 */
export interface Result<T = any> {
  code: number
  message: string
  data: T
}
/**
 * @description 接口参数配置
 */
export interface AxiosRequestConfigByError extends AxiosRequestConfig {
  errorMsg: string
}
