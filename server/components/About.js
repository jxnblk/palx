const { createElement: h } = require('react')
const Base = require('./Base')
const Carbon = require('./Carbon')

const Space = () => h(Base, { css: { flex: '1 1 auto' } })

module.exports = () => h(Base, {
  mx: -3,
  my: [ 3, 4 ],
  css: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
},
  h(Base, {
    width: [ 1, null, 5/8 ],
    px: 3,
    py: 1
  },
    h(Base, { fontSize: [ 2, null, null, 3 ] },
      'Provide a single color value and Palx returns a full-spectrum color palette, well suited for UI design and data visualizations that work harmoniously with brand colors.'
    )
  ),
  h(Space),
  h(Base, {
    px: 3,
    py: 1
  },
    h(Carbon)
  )
)

