
const { createElement: h } = require('react')
const { Text } = require('axs')

module.exports = props => h(Text,
  Object.assign({}, props, {
    is: 'input',
    css: Object.assign({
      fontFamily: 'inherit',
      lineHeight: 1,
      display: 'block',
      width: '100%',
      padding: 0,
      margin: 0,
      color: 'inherit',
      backgroundColor: 'transparent',
      border: 0,
      WebkitAppearance: 'none',
      appearance: 'none',
      ':focus': {
        outline: 'none',
        backgroundColor: props.colors ? props.colors.gray[1] : '#eee'
      }
    }, props.css)
  })
)

