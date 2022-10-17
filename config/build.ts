import type { Terser } from 'vite'

export const terserOptions: Terser.MinifyOptions = {
  compress: {
    // 生产环境打包去除console
    drop_console: true,
    drop_debugger: true,
    keep_infinity: true,
  },
}

export const chunkSizeWarningLimit = 2000

export const OUT_DIR = 'dist'
