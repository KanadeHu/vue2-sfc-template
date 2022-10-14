import type { VueRouter } from 'vue-router/types/router'

import { setExample } from './guards'

export default function (router: VueRouter) {
  setExample(router)
}
