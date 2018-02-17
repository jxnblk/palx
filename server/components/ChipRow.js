const { createElement: h } = require('react')
const Base = require('./Base')
const Chip = require('./Chip')

module.exports = ({
  name,
  values
}) => h(Base, {
    id: name,
    mb: 4
  },
  h(Base, {
    is: 'h2',
    fontSize: 2,
    mb: 1,
  }, name),
  h(Base, {
      mx: -2,
      css: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    },
    values.map((v, i) => (
      h(Chip, {
        key: i,
        name: name + i,
        color: v
      })
    ))
  )
)

