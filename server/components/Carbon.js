const { createElement: h } = require('react')
const Base = require('./Base')

module.exports = () => h(Base, {
  bg: 'white',
  css: cx
},
  h('script', {
    src: '//cdn.carbonads.com/carbon.js?zoneid=1696&serve=CVYD42T&placement=jxnblkcom',
    id: '_carbonads_js'
  })
)

const cx = {
  maxWidth: '320px',
  '& #carbonads': {
    display: 'inline-block',
    fontSize: '12px',
    lineHeight: 1.25,
    textAlign: 'left',
    maxWidth: '320px',
    backgroundColor: 'white',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
      ':hover': {}
    },
    '& > span': {
      display: 'block',
      '&:before': {
        content: '""',
        display: 'table'
      },
      '&:after': {
        content: '""',
        display: 'table',
        clear: 'both'
      },
    },
    '& .carbon-img': {
      float: 'left',
      marginRight: '8px',
      '& > img': {
        display: 'block'
      }
    },
    '& .carbon-text': {
      overflow: 'hidden'
    },
    '& .carbon-poweredby': {
      display: 'block',
      marginTop: '4px',
      opacity: .5
    }
  },
}

