
const { createElement: h } = require('react')
const { Text } = require('axs')

module.exports = props => h(Text,
  Object.assign({}, {
    is: 'a',
    px: 2,
    py: 1,
    size: 5,
    bold: true,
  }, props, {
    css: Object.assign({
      fontFamily: 'inherit',
      textDecoration: 'none',
      display: 'inline-block',
      border: 0,
      WebkitAppearance: 'none',
      appearance: 'none',
      color: 'inherit',
      // color: '#fff',
      backgroundColor: props.colors ? props.colors.gray[3] : '#ccc',
      borderRadius: 3,
      ':hover': {
        backgroundColor: props.color ? '#' + props.color : '#333',
      },
      ':focus': {
        outline: 'none',
        backgroundColor: props.color ? '#' + props.color : '#333',
      }
    }, props.css)
  })
)

