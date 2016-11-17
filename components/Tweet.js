
const { createElement: h } = require('react')
const { Flex, Box } = require('axs')

const text = 'Palx: automatic UI color palette generator'

module.exports = () => h(Flex, {
  css: {
    width: 61,
    height: 20,
    alignSelf: 'flex-end',
    alignItems: 'center'
  }
},
  h('script', {
    id: 'twitter-wjs',
    src: 'https://platform.twitter.com/widgets.js',
    async: true
  }),
  h(Box, {
    is: 'a',
    className: 'twitter-share-button',
    href: `https://twitter.com/intent/tweet?text=${encodeURI(text)}`,
    'data-via': 'jxnblk'
  }, 'Tweet')
)

