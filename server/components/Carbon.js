
const { createElement: h } = require('react')
const { Box } = require('axs')

module.exports = () => h(Box, {
  bg: 'white',
  css: cx
},
  h('script', {
    src: '//cdn.carbonads.com/carbon.js?zoneid=1696&serve=CVYD42T&placement=jxnblkcom',
    id: '_carbonads_js'
  })
)

const cx = {
  maxWidth: 320,
  '#carbonads': {
    display: 'inline-block',
    fontSize: 12,
    lineHeight: 1.25,
    textAlign: 'left',
    maxWidth: 320,
    backgroundColor: 'white',
    a: {
      textDecoration: 'none',
      color: 'inherit',
      ':hover': {}
    },
    '> span': {
      display: 'block',
      ':before': {
        content: '""',
        display: 'table'
      },
      ':after': {
        content: '""',
        display: 'table',
        clear: 'both'
      },
    },
    '.carbon-img': {
      float: 'left',
      marginRight: 8,
      '> img': {
        display: 'block'
      }
    },
    '.carbon-text': {
      overflow: 'hidden'
    },
    '.carbon-poweredby': {
      display: 'block',
      marginTop: 4,
      opacity: .5
    }
  },
}

