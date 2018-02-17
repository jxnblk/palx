const { createElement: h } = require('react')
const Base = require('./Base')

module.exports = props => h(Base,
  Object.assign({}, {
    is: 'a',
    px: 2,
    py: 1,
    fontSize: 1,
    fontWeight: 'bold',
  }, props, {
    css: Object.assign({
      fontFamily: 'inherit',
      textDecoration: 'none',
      display: 'inline-block',
      border: 0,
      WebkitAppearance: 'none',
      appearance: 'none',
      color: 'inherit',
      backgroundColor: props.colors ? props.colors.gray[3] : '#ccc',
      borderRadius: 3,
      transition: 'background-color .2s ease-out',
      ':hover': {
        backgroundColor: props.color ? props.color : '#333',
      },
      ':focus': {
        outline: 'none',
        backgroundColor: props.color ? props.color : '#333',
      }
    }, props.css)
  })
)

