const { createElement: h } = require('react')
const Base = require('./Base')

module.exports = props => h(Base,
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

