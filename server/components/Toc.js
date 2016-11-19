
const { createElement: h } = require('react')
const { Flex, Box, Text } = require('axs')

const cap = str => str.charAt(0).toUpperCase() + str.slice(1)

module.exports = ({ colors }) => {
  return h(Flex, {
      mx: -1,
      my: [ 2, 3 ],
      css: {
        flexWrap: 'wrap'
      }
    },
    Object.keys(colors)
    .filter(key => Array.isArray(colors[key]))
    .map(key => (
      h(Box, {
        key,
        is: 'a',
        href: '#' + key,
        px: 1,
        py: 1,
        width: [
          1/5,
          1/7,
          1/13
        ],
        css: {
          textDecoration: 'none',
          transition: '.2s ease-out',
          transitionProperty: 'color, background-color',
          ':hover': {
            backgroundColor: colors[key][1]
          },
          ':focus': {
            outline: 'none',
            backgroundColor: colors[key][1]
          }
        }
      },
        h(Box, {
          p: 1,
          bg: colors[key][5]
        }),
        h(Text, {
          size: 6,
          center: true,
          color: colors[key][8]
        }, cap(key))
      )
    ))
  )
}

