/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import parseHtml from 'vite-plugin-parse-html'
import legacy from '@vitejs/plugin-legacy'

import proxy from './config/proxy'
import config from './config/devServer'

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
  server: {
    proxy,
    ...config,
  },
})
