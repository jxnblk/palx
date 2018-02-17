const { createElement: h } = require('react')
const Base = require('./Base')
const Button = require('./ButtonLink')

const dehash = str => str.replace(/^#/, '')

module.exports = ({ color, colors }) => h(Base, {
    is: 'section',
    py: 4,
    mb: 4
  },
  h(Base, {
    is: 'h2',
    mb: 2,
    caps: true,
    fontSize: 2,
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

