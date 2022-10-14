import Vue from 'vue'
import type { RouteConfig } from 'vue-router'
import VueRouter from 'vue-router'

// import createRouterGuards from './router-guards'
Vue.use(VueRouter)

// 配置路由
const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/Home/index.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
