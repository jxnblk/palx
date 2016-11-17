
const { createElement: h } = require('react')
const { Text } = require('axs')

module.exports = props => h(Text,
  Object.assign({}, props, {
    is: 'button',
    css: Object.assign({
      fontFamily: 'inherit',
      display: 'inline-block',
      color: 'inherit',
      backgroundColor: 'transparent',
      border: 0,
      WebkitAppearance: 'none',
      appearance: 'none',
      ':hover': {
        backgroundColor: props.colors ? props.colors.gray[1] : '#eee'
      },
      ':focus': {
        outline: 'none',
        color: props.color ? '#' + props.color : 'tomato'
      }
    }, props.css)
  })
)

