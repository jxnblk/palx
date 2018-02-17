const { createElement: h } = require('react')
const Base = require('./Base')

module.exports = props => h(Base, Object.assign({}, props, {
  is: 'a',
  fontWeight: 'bold',
  fontSize: 0,
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

