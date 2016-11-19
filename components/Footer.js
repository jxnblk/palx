
const { createElement: h } = require('react')
const { Flex, Box, Heading, Text } = require('axs')
const Link = require('./Link')

module.exports = ({ color }) => h(Box, {
    is: 'footer',
    py: 4,
    mb: 4
  },
  h(Link, {
    href: 'https://github.com/jxnblk/palx',
    color,
    mr: 2,
  }, 'GitHub'),
  h(Link, {
    href: 'http://jxnblk.com',
    color
  }, 'Made by Jxnblk')
)

