import WButton from './button'
import WTag from './tag'
import WRow from './row'
import WCol from './col'
import WAlert from './alert'

const components = [WButton, WTag, WRow, WCol, WAlert]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  WButton,
  WRow,
  WCol,
  WTag,
  WAlert
}
