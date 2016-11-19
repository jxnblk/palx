
const { createElement: h } = require('react')
const { Box } = require('axs')

module.exports = props => h(Box, Object.assign({}, props, {
  mx: 'auto',
  px: 3,
  css: {
    maxWidth: 1024
  }
}))

