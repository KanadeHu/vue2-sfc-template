import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

const axiosInstance = axios.create({
  timeout: 30000,
})

axiosInstance.interceptors.request.use(
  (value: AxiosRequestConfig) => {
    return value
  },
  (err: AxiosRequestConfig) => {
    Promise.reject(err)
  },
)

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res
  },
  (err: AxiosResponse) => {
    Promise.reject(err)
  },
)

export default axiosInstance
