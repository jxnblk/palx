import React from 'react'
import flatten from '../flatten'

const createDef = ({ key, value }) => `--${key}: ${value}`
const createRule = (prop, prefix = '') => ({ key }) => `.${prefix + key} { ${prop}: var(--${key}) }`


const toArray = obj => Object.keys(obj).map(key => {
  const value = obj[key]
  return { key, value }
})

export default props => {
  if (!props.location.state) return false
  const { colors } = props.location.state
  if (!colors) return 'todo: redirect'

  const obj = flatten(colors)
  const arr = toArray(obj)
  const defs = arr.map(createDef)
  const properties = `:root {\n  ${defs.join(';\n  ')}\n}`
  const colorRules = arr.map(createRule('color')).join('\n')
  const bgRules = arr.map(createRule('background-color', 'bg-')).join('\n')

  const css = [ properties, colorRules, bgRules ].join('\n\n')

  return (
    <pre>
      {css}
    </pre>
  )
}
