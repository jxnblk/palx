
const flatten = require('../src/flatten')

const toArr = obj => Object.keys(obj).map(key => {
  const value = obj[key]
  return { key, value }
})

const createDef = ({ key, value }) => `--${key}: ${value}`
const createRule = (prop, prefix = '') => ({ key }) => `.${prefix + key} { ${prop}: var(--${key}) }`

module.exports = (req, res, { colors }) => {
  const obj = flatten(colors)
  const arr = toArr(obj)
  const defs = arr.map(createDef)

  const props = `:root {\n  ${defs.join(';\n  ')}\n}`
  const colorRules = arr.map(createRule('color')).join('\n')
  const bgRules = arr.map(createRule('background-color', 'bg-')).join('\n')

  return [ props, colorRules, bgRules ].join('\n\n')
}

