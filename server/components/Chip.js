const { createElement: h } = require('react')
const Base = require('./Base')

const cap = str => str.charAt(0).toUpperCase() + str.slice(1)

const format = str => {
  return cap(str).replace(/\d$/, ' $&')
}

module.exports = ({ name, color }) => h(Base, {
    p: 2,
    width: [
      1/2,
      1/3,
      1/5
    ]
  },
  h(Base, {},
    h(Base, {
      px: 3,
      py: 4,
      bg: color
    }),
    h(Base, {
      css: {
        display: 'flex'
      }
    },
      h(Base, {
        fontSize: 0,
        fontWeight: 'bold'
      }, format(name)),
      h(Base, { css: { flex: '1 1 auto' } }),
      h(Base, {
        fontSize: 0
      }, color)
    )
  )
)

