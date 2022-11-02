import Vue from 'vue'
import ElementUI from 'element-ui'

import './styles/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import setupRouterGuards from './router/router-guards'

setupRouterGuards(router)

Vue.use(ElementUI)

new Vue({
  pinia: store,
  router,
  render: h => h(App),
}).$mount('#app')
