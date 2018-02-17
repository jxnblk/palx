const { createElement: h } = require('react')
const ChipRow = require('./ChipRow')
const Base = require('./Base')

module.exports = ({
  colors
}) => h(Base, {},
  Object.keys(colors).map((key, i) => {
    const value = colors[key]
    return Array.isArray(value) ? (
      h(ChipRow, {
        key: i,
        name: key,
        values: value
      })
    ) : null
  })
)

