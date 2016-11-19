
const { createElement: h } = require('react')
const { Text } = require('axs')

module.exports = props => h(Text, Object.assign({}, props, {
  is: 'a',
  bold: true,
  size: 6,
  color: 'inherit',
  css: {
    textDecoration: 'none',
    transition: 'color .2s ease-out',
    ':focus': {
      outline: 'none',
      color: props.color
    },
    ':hover': {
      color: props.color
    }
  }
}))

