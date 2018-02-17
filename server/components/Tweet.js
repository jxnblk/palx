const { createElement: h } = require('react')
const Base = require('./Base')

const text = 'Palx: automatic UI color palette generator'

module.exports = (props) => h(Base, Object.assign({
  css: {
    display: 'flex',
    width: 61,
    height: 20,
    alignItems: 'center'
  }
}, props),
  h('script', {
    id: 'twitter-wjs',
    src: 'https://platform.twitter.com/widgets.js',
    async: true
  }),
  h(Base, {
    is: 'a',
    className: 'twitter-share-button',
    href: `https://twitter.com/intent/tweet?text=${encodeURI(text)}`,
    'data-via': 'jxnblk'
  }, 'Tweet')
)

