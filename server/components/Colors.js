
const { createElement: h } = require('react')
const { Flex, Box, cxs } = require('axs')
const ChipRow = require('./ChipRow')

module.exports = ({
  colors
}) => h(Box, {},
  Object.keys(colors).map((key, i) => {
    const value = colors[key]
    return Array.isArray(value) ? (
      h(ChipRow, {
        key: i,
        name: key,
        values: value
      })
    ) : null
  })
)

