
const { createElement: h } = require('react')
const { Flex, Box, cxs } = require('axs')
const palx = require('../src/index')
const Container = require('./Container')
const Header = require('./Header')
const Form = require('./Form')
const Colors = require('./Colors')
const Footer = require('./Footer')
const css = require('./css')

module.exports = ({
  color = '07c'
}) => {
  const colors = palx('#' + color)

  css({ colors })

  return h(Container, null,
    h(Header),
    h(Form, { color, colors }),
    h(Colors, { colors }),
    h(Footer, { color })
  )
}

