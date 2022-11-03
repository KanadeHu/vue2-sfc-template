import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Message, Notification } from 'element-ui'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'
import type { AxiosRequestConfigByError } from '#/axios'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

interface ICodeMessage {
  [propName: number]: string
}

const StatusCodeMessage: ICodeMessage = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功',
  400: '请求错误(400)',
  401: '未授权，请重新登录(401)',
  403: '拒绝访问(403)',
  404: '请求出错(404)',
  408: '请求超时(408)',
  500: '服务器错误(500)',
  501: '服务未实现(501)',
  502: '网络错误(502)',
  503: '服务不可用(503)',
  504: '网络超时(504)',
}

const http: AxiosInstance = axios.create({
  // baseURL: process.env.VUE_APP_API_PREFIX,
  timeout: 30 * 1000,
})

// 请求拦截器
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    NProgress.start()
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response
    const { message, success } = data

    if (!success) {
      NProgress.done()
      Notification.error(message || '服务器端错误')
      return Promise.reject(new Error('Error'))
    }
    NProgress.done()
    return response
  },
  error => {
    NProgress.done()
    return Promise.reject(error)
  },
)
// 错误几种处理
const request = async <T = unknown>(config: AxiosRequestConfigByError): Promise<T | null> => {
  try {
    const res = await http.request<T>(config)
    return res.data
  } catch (e: any) {
    const response = { ...e.response }
    if (response) {
      Message.error(StatusCodeMessage[response.status] || '系统异常')
    } else {
      Message.error(config.errorMsg || '接口异常')
    }
  }
  return null
}

request.get = <T = unknown>(config: AxiosRequestConfigByError): Promise<T | null> => {
  return request({
    ...config,
    method: 'get',
  })
}

request.post = <T = unknown>(config: AxiosRequestConfigByError): Promise<T | null> => {
  return request({
    ...config,
    method: 'post',
  })
}

export default request
