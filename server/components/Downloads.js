
const { createElement: h } = require('react')
const { Flex, Box, Heading, Text } = require('axs')
const Button = require('./ButtonLink')

const dehash = str => str.replace(/^#/, '')

module.exports = ({ color, colors }) => h(Box, {
    is: 'section',
    py: 4,
    mb: 4
  },
  h(Heading, {
    mb: 2,
    caps: true,
    size: 4,
  }, 'Download'),
  h(Button, {
    href: `/${dehash(color)}.json`,
    target: '_blank',
    color,
    colors,
    mr: 2
  }, 'JSON'),
  h(Button, {
    href: `/${dehash(color)}.css`,
    target: '_blank',
    color,
    colors,
    mr: 2
  }, 'CSS'),
  h(Button, {
    href: `/${dehash(color)}.scss`,
    target: '_blank',
    color,
    colors,
    mr: 2
  }, 'Sass')
)

