import Vue from 'vue'

import App from './App.vue'
import store from './store/index'
import './style/index.css'
import './style/index.scss'
import router from './router/index'
import setupRouterGuards from './router/router-guards'

setupRouterGuards(router)

new Vue({
  pinia: store,
  router,
  render: h => h(App),
}).$mount('#app')
