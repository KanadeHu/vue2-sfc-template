import type { VueRouter } from 'vue-router/types/router'

export function setExample(router: VueRouter) {
  router.beforeEach((to, from, next) => {
    console.log(to, from, next)
    next()
  })
}
