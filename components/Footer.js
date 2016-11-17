
const { createElement: h } = require('react')
const { Flex, Box, Heading, Text } = require('axs')
const Link = require('./Link')
const Carbon = require('./Carbon')

module.exports = ({ color }) => h(Box, {
    is: 'footer',
    py: 4,
    mb: 4
  },
  h(Box, { py: 3 },
    h(Carbon)
  ),
  h(Link, {
    href: 'http://jxnblk.com',
    color
  }, 'Made by Jxnblk')
)

