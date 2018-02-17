const { createElement: h } = require('react')
const Base = require('./Base')

module.exports = props => h(Base, Object.assign({}, props, {
  is: 'label',
  fontSize: 0,
}))

