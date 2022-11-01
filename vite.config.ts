/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path'

import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue2'
import parseHtml from 'vite-plugin-parse-html'
import legacy from '@vitejs/plugin-legacy'
import autoprefixer from 'autoprefixer'
import viteEslint from 'vite-eslint-plugin'

import { chunkSizeWarningLimit, OUT_DIR, terserOptions } from './config/build'
import proxy from './config/proxy'
import config from './config/devServer'

// 全局scss变量文件导入
const variablePath = normalizePath(resolve('./src/styles/variable.scss'))

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  // 如果有cdn资源，可以替换地址
  base: '/',
  plugins: [
    vue(),
    parseHtml({
      inject: {
        data: {
          title: 'vue3空白模板',
        },
      },
      minifyOpt: {
        isMinify: false,
      },
    }),
    legacy({
      targets: [
        '> 1%, last 1 version, ie >= 11',
        'safari >= 10',
        'Chrome >= 60',
        'Safari >= 10.1',
        'Firefox >= 54',
        'Edge >= 15',
      ],
    }),
    viteEslint(),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src'),
      },
      {
        find: '#',
        replacement: pathResolve('types'),
      },
    ],
    extensions: ['.js', '.json', '.ts', 'tsx', '.vue'],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${variablePath}";`,
      },
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 9'],
        }),
      ],
    },
  },
  server: {
    proxy,
    ...config,
  },
  build: {
    terserOptions,
    reportCompressedSize: false,
    chunkSizeWarningLimit,
    outDir: OUT_DIR,
  },
  // 用于某些动态加载的依赖包预先构建，预构建后缓存起来，降低加载这些模块缓慢问题
  optimizeDeps: {
    include: [],
  },
})
