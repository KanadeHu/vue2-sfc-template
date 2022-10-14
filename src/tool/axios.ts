import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
// import { ElNotification } from 'element-plus'

import errorHandle from './errorHandle'

// 定义数据返回结构体(此处我简单定义一个比较常见的后端数据返回结构体，实际使用我们需要按照自己所在的项目开发)
interface ResponseData<T = null> {
  code: string | number
  data: T
  success: boolean
  message?: string
  [key: string]: any
}

const axiosInstance = axios.create()
// 设定响应超时时间
axiosInstance.defaults.timeout = 30000
// 可以后续根据自己http请求头特殊邀请设定请求头

axiosInstance.interceptors.request.use(
  (req: AxiosRequestConfig<any>) => {
    // 特殊处理，后续如果项目中有全局通传参数，可以在这儿做一些处理
    return req
  },
  error => Promise.reject(error),
)
// 响应拦截
axiosInstance.interceptors.response.use(
  (res: AxiosResponse<any, any>) => {
    // 数组处理
    return res
  },
  error => Promise.reject(error),
)

// 通用的请求方法体
const axiosHttp = async <T extends Record<string, any> | null>(
  config: AxiosRequestConfig,
  desc: string,
): Promise<T> => {
  try {
    const { data } = await axiosInstance.request<ResponseData<T>>(config)
    if (data.success) {
      return data.data
    }
    // 如果请求失败统一做提示(此处我没有安装组件库，我简单写个mock例子)
    // ElNotification({
    //   title: desc,
    //   message: `${data.message || '请求失败，请检查'}`,
    // })
  } catch (e: any) {
    // 统一的错误处理
    if (e.response && e.response.status) {
      errorHandle(e.response.status, desc)
    } else {
      // ElNotification({
      //   title: desc,
      //   message: '接口异常，请检查',
      // })
    }
  }
  return null as T
}
// get请求方法封装
export const get = async <T = Record<string, any> | null>(url: string, params: Record<string, any>, desc: string) => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url,
    params,
  }
  const data = await axiosHttp<T>(config, desc)
  return data
}
// Post请求方法
export const post = async <T = Record<string, any> | null>(url: string, data: Record<string, any>, desc: string) => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url,
    data,
  }
  const info = await axiosHttp<T>(config, desc)
  return info
}
