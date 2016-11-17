
const { createElement: h } = require('react')
const { Flex, Box, Text } = require('axs')
const { Arrow } = require('reline')
const Label = require('./Label')
const Input = require('./Input')
const Button = require('./Button')

const dehash = str => str.replace(/^#/, '')

module.exports = ({
  color,
  colors
}) => h(Box, {
    mb: 4
  },
  h(Label, {
    htmlFor: 'color'
  }, 'Base Color'),
  h(Flex, {
    is: 'form',
    action: '/',
    mx: -1
  },
    h(Flex, {
      width: [
        1/3,
        null,
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
        2/3,
        null,
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
          fontFamily: 'Roboto Mono'
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

