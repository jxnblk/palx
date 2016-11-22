
const { createElement: h } = require('react')
const { Flex, Box, Text } = require('axs-ui')
const Carbon = require('./Carbon')

const Space = () => h(Box, { css: { flex: '1 1 auto' } })

module.exports = () => h(Flex, {
  mx: -3,
  my: [ 3, 4 ],
  css: {
    flexWrap: 'wrap',
    alignItems: 'center'
  }
},
  h(Box, {
    width: [ 1, null, 5/8 ],
    px: 3,
    py: 1
  },
    h(Text, { size: [ 4, null, null, 3 ] },
      'Provide a single color value and Palx returns a full-spectrum color palette, well suited for UI design and data visualizations that work harmoniously with brand colors.'
    )
  ),
  h(Space),
  h(Box, {
    px: 3,
    py: 1
  },
    h(Carbon)
  )
)

