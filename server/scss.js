
const flatten = require('../src/flatten')

const createDef = ({ key, value }) => `$${key}: ${value}`

module.exports = (req, res, { colors }) => {
  const obj = flatten(colors)
  const defs = Object.keys(obj).map(key => {
    const value = obj[key]
    return createDef({ key, value })
  })

  return defs.join(';\n')
}

