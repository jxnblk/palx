const { createElement: h } = require('react')
const Base = require('./Base')
const Tweet = require('./Tweet')

module.exports = ({ color, colors, }) =>
  h(Base, {
      is: 'header',
      py: [ 0, 1, 3 ]
    },
    h(Base, {
      mb: 2,
      css: {
        display: 'flex',
        alignItems: 'baseline',
        '@media screen and (max-width:32em)': {
          flexWrap: 'wrap'
        }
      }
    },
      h(Base, {
        is: 'h1',
        fontSize: 2,
        mr: 2,
        caps: true
      }, 'Palx'),
      h(Base, {
        fontWeight: 'bold'
      },
        'Automatic UI Color Palette Generator'
      ),
      h(Base, {
        css: { flex: '1 1 auto' }
      }),
      h(Tweet, { my: 1 })
    )
  )

