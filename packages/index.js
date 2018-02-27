/* index.js */
import WButton from './button'
import WRow from './row'
import WCol from './col'
import WAlert from './alert'

const components = [
  WButton,
  WRow,
  WCol,
  WAlert
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  WButton,
  WRow,
  WCol,
  WAlert
}
