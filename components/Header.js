
const { createElement: h } = require('react')
const { Flex, Box, Heading, Text } = require('axs')

module.exports = () => h(Box, {
    is: 'header',
    py: 3
  },
  h(Flex, {
    css: {
      alignItems: 'baseline'
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
    )
  )
)

