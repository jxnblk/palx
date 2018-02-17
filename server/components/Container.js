const { createElement: h } = require('react')
const Base = require('./Base')

module.exports = props => h(Base, Object.assign({}, props, {
  mx: 'auto',
  px: 3,
  css: {
    maxWidth: 1024
  }
}))

