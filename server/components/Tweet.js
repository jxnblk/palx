
const { createElement: h } = require('react')
const { Flex, Box } = require('axs-ui')

const text = 'Palx: automatic UI color palette generator'

module.exports = (props) => h(Flex, Object.assign({
  css: {
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
  h(Box, {
    is: 'a',
    className: 'twitter-share-button',
    href: `https://twitter.com/intent/tweet?text=${encodeURI(text)}`,
    'data-via': 'jxnblk'
  }, 'Tweet')
)

