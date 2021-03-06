// @ts-nocheck
import Vue from 'vue'

import App from './app'
// import router from './router'
// import store from './store'

import './assets/css/index.css'

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(App),
}).$mount('#app')
