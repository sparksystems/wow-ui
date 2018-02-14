/**
 * @author tonylinx
 * Date: 18/01/23
 */
import Tag from './src/tag.vue'

Tag.install = function(Vue) {
  Vue.component(Tag.name, Tag)
}

export default Tag
