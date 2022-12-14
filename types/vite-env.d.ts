/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * @description 开发环境路径
   */
  VITE_DEV_PORT: number
  /**
   * @description 开发环境
   */
  VITE_ENV_TYPE: 'dev' | 'test' | 'pro' | 'pre'
  /**
   * @description 图片cdn资源地址判断
   */
  VITE_IMG_BASE_URL: string
}
