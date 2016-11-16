
const chroma = require('chroma-js')
const hueName = require('./hue-name')

const lums = [
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  0
]
  .map(n => n + .5)
  .map(n => n / 10)

const createHues = (length = 12) => {
  const hueLength = length
  const hueStep = 360 / hueLength
  return base => {
    const hues = Array.from({ length: hueLength })
      .map((n, i) => {
        return Math.floor((base + (i * hueStep)) % 360)
      })

    return hues
  }
}

const desaturate = hex => (
  chroma(hex).desaturate(2).hex()
)

const createBlack = hex => {
  return chroma(hex).desaturate(2).luminance(.05).hex()
}

const createShades = hex => {
  return lums.map(lum => {
    return chroma(hex).luminance(lum).hex()
  })
}

// Mappers
const toHex = ({ key, value }) => ({ key, value: value.hex() })

const keyword = hex => {
  const [ hue, sat ] = chroma(hex).hsl()
  if (sat < .5) {
    return 'gray'
  }
  const name = hueName(hue)
  return name
}

// Reducer
const toObj = (a = {}, color) => {
  const key = a[color.key] ? color.key + '2' : color.key
  a[key] = color.value
  return a
}

const palx = (hex, options = {}) => {
  const color = chroma(hex)
  const colors = []
  const [ hue, sat, lte ] = color.hsl()

  const hues = createHues(12)(hue)

  colors.push({
    key: 'black',
    value: createBlack('' + color.hex())
  })

  colors.push({
    key: 'gray',
    value: createShades(desaturate('' + color.hex()))
  })

  hues.forEach(h => {
    const c = chroma.hsl(h, sat, lte)
    const key = keyword(c)
    colors.push({
      key,
      value: createShades('' + c.hex())
    })
  })

  const obj = colors
    .reduce(toObj, {})

  return obj
}

module.exports = palx

