
const { cxs } = require('axs')

module.exports = ({ color, colors }) => {
  cxs('*', {
    boxSizing: 'border-box'
  })

  cxs('body', {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    lineHeight: 1.5,
    margin: 0,
    color: colors.black
  })

  cxs('input::selection', {
    background: color
  })
}


