
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
      transition: '.2s ease-out',
      transitionProperty: 'color, background-color',
      ':hover': {
        color: props.color ? props.color : '#07c'
      },
      ':focus': {
        outline: 'none',
        color: props.color ? props.color : '#07c'
      }
    }, props.css)
  })
)

