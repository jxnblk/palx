
const { createElement: h } = require('react')
const chroma = require('chroma-js')
const { Flex, Box, Text } = require('axs')
const { Arrow } = require('reline')
const Label = require('./Label')
const Input = require('./Input')
const Button = require('./Button')

const dehash = str => str.replace(/^#/, '')

module.exports = ({
  color,
  colors
}) => {
  const hsl = chroma(color).hsl()
    .map((n, i) => i === 0
      ? Math.round(n)
      : Math.round(n * 100)
    ).join(', ')

  return h(Box, {
      mb: 3
    },
    h(Label, {
      htmlFor: 'color'
    }, 'Base Color'),
    h(Flex, {
      is: 'form',
      action: '/',
      mx: -1,
      css: {
        flexWrap: 'wrap'
      }
    },
      h(Flex, {
        width: [
          1,
          1/3,
          1/5,
        ],
        px: 1
      },
        h(Box, {
          width: 1,
          py: 3,
          bg: color
        })
      ),
      h(Flex, {
        width: [
          1,
          2/3,
          4/5,
        ],
        px: 1
      },
        h(Text, {
          size: 1
        }, '#'),
        h(Input, {
          id: 'color',
          name: 'color',
          defaultValue: dehash(color),
          colors,
          size: 1,
          css: {
            fontFamily: '"Roboto Mono", Menlo, monospace'
          }
        }),
        h(Button, {
          p: 1,
          color,
          title: 'Change Color'
        },
          h(Arrow, {
            strokeWidth: 2.25,
            size: 32
          })
        )
      )
    ),
    h(Text, { right: true, size: 6 }, `hsl(${hsl})`)
  )
}

