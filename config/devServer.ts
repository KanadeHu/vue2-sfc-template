// eslint-disable-next-line import/no-extraneous-dependencies
import { chrome } from 'chrome-paths'
// 端口号
const port = 4400
// 设定chrome为默认浏览器
process.env.BROWSER = chrome

export default {
  port,
  https: false,
  host: '0.0.0.0',
  open: `http://0.0.0.0:${port}`,
}
