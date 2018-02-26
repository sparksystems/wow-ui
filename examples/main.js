import Vue from 'vue'
import App from './App'
import WowUI from '../packages/index'
import message from './components/message.vue'
import router from './router'
import '../packages/theme/lib/index.css'

Vue.component('message', message)
Vue.use(WowUI)

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
