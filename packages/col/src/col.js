/**
 * @author tonylinx
 * Date: 18/1/23
 */
export default {
  name: 'WCol',

  props: {
    span: {
      type: Number,
      default: 100
    },
    offset: Number,
    tag: {
      type: String,
      default: 'div'
    }
  },

  computed: {
    gutter() {
      let parent = this.$parent
      while (parent && parent.$options.componentName !== 'WRow') {
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0
    }
  },
  render (h) {
    let classList = []
    let style = {}

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft
    }

    ['span', 'offset'].forEach(prop => {
      if (this[prop]) {
        if (prop === 'span' && this[prop] > 0) {
          classList.push(`w-col-${this[prop]}`)
        }
        if (prop === 'offset') {
          classList.push(`w-col-offset-${this[prop]}`)
        }
        // classList.push(
        //   prop !== 'span'
        //     ? `w-col-${prop}-${this[prop]}`
        //     : `w-col-${this[prop]}`
        // )
      }
    })

    return h (this.tag, {
      class: ['w-col', classList],
      style
    }, this.$slots.default)
  }
}
