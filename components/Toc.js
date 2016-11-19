
const { createElement: h } = require('react')
const { Flex, Box, Text } = require('axs')

module.exports = ({ colors }) => {
  return h(Flex, { mx: -1, mb: 4 },
    Object.keys(colors)
    .filter(key => Array.isArray(colors[key]))
    .map(key => (
      h(Box, {
        key,
        is: 'a',
        href: '#' + key,
        p: 1,
        width: [
          1/13
        ],
        css: {
          textDecoration: 'none'
        }
      },
        h(Box, {
          p: 1,
          bg: colors[key][5]
        }),
        h(Text, {
          size: 6,
          center: true,
          color: colors[key][8]
        }, key)
      )
    ))
  )
}

