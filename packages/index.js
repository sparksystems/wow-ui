/**
 * @author tonylinx
 * Date: 18/02/13
 */
import WAlert from './alert'
import WButton from './button';
import WCol from './col'
import WRow from './row'
import WTag from './tag'

const components = [
  WButton,
  WRow,
  WCol,
  WTag,
  WAlert
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
  Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  WButton,
  WRow,
  WCol,
  WTag,
  WShowMore,
  WLimitTextArea,
  MetaInfo,
  WAlert,
  WLoadingBar
}
