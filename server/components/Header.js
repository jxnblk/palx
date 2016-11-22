
const { createElement: h } = require('react')
const { Flex, Box, Heading, Text } = require('axs-ui')
const Tweet = require('./Tweet')

const css = require('./css')

module.exports = ({ color, colors, }) => {
  css({ color, colors })

  return h(Box, {
      is: 'header',
      py: [ 0, 1, 3 ]
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
    )
  )
}

