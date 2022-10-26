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
    ],
    extensions: ['.js', '.json', '.ts', 'tsx', '.vue'],
  },
  css: {
    preprocessorOptions: {
      scss: {
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
})
