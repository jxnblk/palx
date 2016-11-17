
const { createElement: h } = require('react')
const { Flex, Box, Heading } = require('axs')
const Chip = require('./Chip')

module.exports = ({
  name,
  values
}) => h(Box, { mb: 3 },
  h(Heading, {
    size: 4,
    caps: true,
  }, name),
  h(Flex, {
      mx: -1,
      css: {
        flexWrap: 'wrap'
      }
    },
    values.map((v, i) => (
      h(Chip, {
        key: i,
        name: name + i,
        color: v
      })
    ))
  )
)

