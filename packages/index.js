/**
 * @author tonylinx
 * Date: 18/01/23
 */
import MetaInfo from './meta-info/index'
import WAlert from './alert/index'
import WButton from './button/index.js';
import WCol from './col/index'
import WLimitTextArea from './limit-textarea/index'
import WLoadingBar from './loading-bar/index'
import WRow from './row/index'
import WShowMore from './show-more/index'
import WTag from './tag/index'

const components = [
  WButton,
  WRow,
  WCol,
  WTag,
  WShowMore,
  WLimitTextArea,
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
