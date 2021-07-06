import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/scss/app.scss'

Vue.config.productionTip = false

window._Vue = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
