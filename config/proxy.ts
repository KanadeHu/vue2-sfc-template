import { ServerOptions } from "vite"

const mode = process.env.NODE_ENV

const target = mode === 'production' ? 'http://localhost:3000' : 'http://localhost:3000'
// 代理模块，我们需要注意，如果本地用nginx做了同源跨域策略，此处可以不用配置，如果本地没有用nginx，这块做一个同源策略
const proxy: ServerOptions['proxy'] = {
  // 使用 proxy 实例
  '/api': {
    target,
    secure: false,
    changeOrigin: true,
    // rewrite: path => path.replace(/^\/api/, ''), 根据实际情况是否需要替换地址
  },
}

export default proxy
