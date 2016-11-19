
const { createElement: h } = require('react')
const { Text } = require('axs')

module.exports = props => h(Text, Object.assign({}, props, {
  is: 'label',
  size: 6,
}))

