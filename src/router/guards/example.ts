import type { VueRouter } from 'vue-router/types/router'

export function setExample(router: VueRouter) {
  router.beforeEach((to, from, next) => {
    // eslint-disable-next-line no-console
    console.log(to, from, next)
    next()
  })
}
