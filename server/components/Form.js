
const { createElement: h } = require('react')
const chroma = require('chroma-js')
const { Flex, Box, Text } = require('axs-ui')
const { Arrow } = require('reline')
const Label = require('./Label')
const Input = require('./Input')
const Button = require('./Button')

const dehash = str => str.replace(/^#/, '')

module.exports = ({
  color,
  colors
}) => {
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
        px: 1,
        css: {
          fontFamily: '"Roboto Mono", Menlo, monospace'
        }
      },
        h(Text, {
          size: 1,
          css: {
            position: 'relative'
          }
        }, '#'),
        h(Input, {
          id: 'color',
          name: 'color',
          defaultValue: dehash(color),
          pattern: '([0-9A-Fa-f]{3}){1,2}',
          colors,
          size: 1,
          css: {
            paddingLeft: '1em',
            marginLeft: '-1em'
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
    )
  )
}

