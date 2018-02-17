const { createElement: h } = require('react')
const nano = require('nano-style')
const tag = require('clean-tag').default
const {
  space,
  color,
  fontSize,
  fontWeight,
  textAlign,
  width,
} = require('styled-system')

const css = props => props.css

const Base = nano(tag)(
  space,
  color,
  fontSize,
  fontWeight,
  textAlign,
  width,
  css
)

Base.displayName = 'Base'

module.exports = Base
