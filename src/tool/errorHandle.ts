// import { ElNotification } from 'element-plus'

// function notificat(message: string, title: string) {
//   ElNotification({
//     title,
//     message,
//   })
// }
/**
 * @description 获取接口定义
 * @param status {number} 错误状态码
 * @param desc {string} 接口描述信息
 */
export default function errorHandle(status: number, _desc: string) {
  switch (status) {
    case 401:
      // notificat('用户登录失败', desc)xxxx
      break
    case 404:
      // notificat('请求不存在', desc)
      break
    case 500:
      // notificat('服务器错误，请检查服务器', desc)
      break
    default:
      // notificat(`其他错误${status}`, desc)
      break
  }
}
