
const { createElement: h } = require('react')
const { Flex, Box, cxs } = require('axs')
const Container = require('./Container')
const Header = require('./Header')
const Form = require('./Form')
const Toc = require('./Toc')
const Colors = require('./Colors')
const Downloads = require('./Downloads')
const Footer = require('./Footer')
const css = require('./css')

module.exports = ({
  color,
  colors
}) => {
  css({ color, colors })

  return h(Container, null,
    h(Header),
    h(Form, { color, colors }),
    h(Toc, { colors }),
    h(Colors, { colors }),
    h(Downloads, { color, colors }),
    h(Footer, { color })
  )
}

