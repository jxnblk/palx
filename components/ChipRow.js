
const { createElement: h } = require('react')
const { Flex } = require('axs')
const Chip = require('./Chip')

module.exports = ({
  name,
  values
}) => h(Flex, {
    mb: 3,
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

