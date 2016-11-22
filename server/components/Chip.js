
const { createElement: h } = require('react')
const { Flex, Box, Text } = require('axs-ui')

const cap = str => str.charAt(0).toUpperCase() + str.slice(1)

const format = str => {
  return cap(str).replace(/\d$/, ' $&')
}

module.exports = ({ name, color }) => h(Box, {
    p: 1,
    width: [
      1/2,
      1/3,
      1/5
    ]
  },
  h(Box, {},
    h(Box, {
      px: 3,
      py: 3,
      bg: color
    }),
    h(Flex, {},
      h(Text, {
        size: 6,
        bold: true
      }, format(name)),
      h(Box, { css: { flex: '1 1 auto' } }),
      h(Text, {
        size: 6
      }, color)
    )
  )
)

