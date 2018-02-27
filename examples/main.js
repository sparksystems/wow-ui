// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import message from './components/message.vue'
import WowUI from '../packages/index'
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
