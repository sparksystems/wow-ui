import '../packages/theme/lib/index.css'

import App from './App'
import Vue from 'vue'
import WowUI from '../packages/index'
import message from './components/message.vue'
import router from './router'

Vue.component('message', message)
Vue.use(WowUI)

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
