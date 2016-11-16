
const { createElement: h } = require('react')
const cxs = require('cxs').default
const { Flex, Box } = require('axs')
const palx = require('../src/index')

cxs('*', {
  boxSizing: 'border-box'
})
cxs('body', {
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  lineHeight: 1.5,
  margin: 0
})

const Debug = (props) => h('pre', null, JSON.stringify(props, null, 2))

const Chip = ({ name, color }) => h(Box, {
    p: 2,
    width: 1/10,
  },
  h(Box, {
    p: 2,
    bg: color
  }, name + ' : ' + color)
)

const ChipRow = ({
  name,
  values
}) => h(Flex, {},
  values.map((v, i) => (
    h(Chip, {
      key: i,
      name: name + i,
      color: v
    })
  ))
)

module.exports = ({
  color = '07c'
}) => {
  const colors = palx('#' + color)

  return h(Box, {
    p: 3
  },
    'base: ' + color,
    Object.keys(colors).map((key, i) => {
      const value = colors[key]
      return Array.isArray(value) ? (
        h(ChipRow, {
          key: i,
          name: key,
          values: value
        })
      ) : (
        h(Chip, {
          key: i,
          name: key,
          color: value
        })
      )
    }),
    h(Debug, { colors })
  )
}

