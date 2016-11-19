
const { createElement: h } = require('react')
const { Flex, Box, Heading, Text } = require('axs')
const Tweet = require('./Tweet')

module.exports = () => h(Box, {
    is: 'header',
    py: 3
  },
  h(Flex, {
    mb: 2,
    css: {
      alignItems: 'baseline',
      '@media screen and (max-width:32em)': {
        flexWrap: 'wrap'
      }
    }
  },
    h(Heading, {
      level: 1,
      size: 3,
      mr: 2,
      caps: true
    }, 'Palx'),
    h(Text, {
      bold: true
    },
      'Automatic UI Color Palette Generator'
    ),
    h(Box, {
      css: { flex: '1 1 auto' }
    }),
    h(Tweet, { my: 1 })
  ),
  h(Text, { },
    'Provide a single color value and Palx returns a full-spectrum color palette, well suited for UI design and data visualizations that works harmoniously with brand colors'
  )
)

