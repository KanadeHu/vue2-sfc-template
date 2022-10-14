# Vue3-Tsx-Example

### 一、启动

---

&emsp;&emsp;我们推荐使用 yarn 和 pnpm 两种方式启动，当然也可以使用 npm 启动也是可以的，选择自己熟悉的

&emsp;&emsp;`pnpm install && pnpm run dev`

&emsp;&emsp;或者

&emsp;&emsp;`yarn && yarn dev`

&emsp;&emsp;执行单元测试

&emsp;&emsp;`pnpm run test`

### 二、模板介绍

---

&emsp;&emsp;这个项目是基于 vue3、vite、tailwindcss、jest 单层创建一个项目模板，可以让我们快速开始开发的一个基础版本项目，下面是这个项目里面的一些工具库方法供参考使用

- [vue3](https://v3.cn.vuejs.org/api/)
- [tailwindcss](https://www.tailwindcss.cn/docs)
- [pina](https://pinia.vuejs.org/introduction.html)
- [vite](https://vitejs.cn/)
- eslint
- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [vite-plugin-parser-html](https://github.com/KanadeHu/vite-plugin-parse-html)
- [vue-test-utils](https://test-utils.vuejs.org/)
- [jest](https://www.jestjs.cn/)
- [element-plus](https://element-plus.org/zh-CN/)
- vue/test-utils、@testing-library/dom、@testing-library/user-event、@testing-library/user-event（vue 单元测试工具）
- @babel/core、babel-jest、@vue/babel-preset-app (babel 这里仅仅用来作单元测试，并没有和打包结合)
- ?vue-jest (此项作为可选项目，我在项目中使用的是 tsx 语法糖，并没有使用 vue 的模板方式，单测就没有用该方式)
- typescript

### 三、项目结构目录说明

---

&emsp;&emsp;项目概览图如下，这个是我喜欢的结构，大家按照自己的喜好自行调整即可

```markdown
├─.eslintignore
├─.eslintrc.js // eslint 配置内容
├─.gitignore
├─.prettierrc // 代码书写规范
├─README.md
├─babel.config.js // 仅用于 jest 单测 babel 配置
├─index.html
├─jest.config.ts // 单测配置文件
├─package.json
├─pnpm-lock.yaml
├─postcss.config.js
├─tailwind.config.js // tailwind css 工具库配置
├─tsconfig.json
├─tsconfig.node.json
├─vite.config.ts // vite 配置项
├─src
| ├─App.tsx
| ├─main.ts
| ├─typings.d.ts
| ├─utils // 工具函数文件夹
| | └index.ts
| ├─tool // 系统工具库封装
| | ├─axios.ts
| | └errorHandle.ts
| ├─style // 全局通用样式
| | ├─index.css
| | └index.scss
| ├─store // 状态管理
| ├─services // http 请求存放
| ├─router // 路由
| ├─page // 页面
| ├─component // 组件相关
| ├─assets // 静态资源
├─public // 公共资源
├─config // vite 部分配置抽离
├─**test** // 单元测试
```

### 四、项目参考

---

本项目相关构建思路参考[文章链接](https://juejin.cn/post/7097633315028467748)
