
const { createElement: h } = require('react')
const { Text } = require('axs')

module.exports = props => h(Text, Object.assign({}, props, {
  is: 'a',
  bold: true,
  size: 6,
  color: 'inherit',
  css: {
    textDecoration: 'none',
    ':focus': {
      color: '#' + props.color
    },
    ':hover': {
      color: '#' + props.color
    }
  }
}))

