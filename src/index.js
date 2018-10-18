
const chroma = require('chroma-js')
const hueName = require('./hue-name')

const lums = Array(10).fill()
  .map((x, i) => i)
  .reverse()
  .map(n => n + 0.5)
  .map(n => n / 10)

const createHues = length => {
  const hueStep = 360 / length
  return base => {
    const hues = Array(length).fill()
      .map((x, i) => i)
      .map(n => Math.floor((base + (n * hueStep)) % 360))

    return hues
  }
}

const desat = n => hex => {
  const [ h, s, l ] = chroma(hex).hsl()
  return chroma.hsl(h, n, l).hex()
}

const createBlack = hex => {
  const d = desat(1 / 8)(hex)
  return chroma(d).luminance(lums.slice(-1).pop()).hex()
}

const createWhite = hex => {
  const d = desat(1 / 8)(hex)
  return chroma(d).luminance(lums.slice().shift()).hex()
}

const createShades = hex => {
  return lums.map(lum => {
    return chroma(hex).luminance(lum).hex()
  })
}

// Mappers
const keyword = hex => {
  const [ hue, sat ] = chroma(hex).hsl()
  if (sat < 0.5) {
    return 'gray'
  }
  const name = hueName(hue)
  return name
}

// Reducer
const toObj = (a, color) => {
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
    value: createBlack('' + color.hex()),
  })

  colors.push({
    key: 'white',
    value: createWhite('' + color.hex()),
  })

  colors.push({
    key: 'gray',
    value: createShades(desat(1 / 8)('' + color.hex())),
  })

  hues.forEach(h => {
    const c = chroma.hsl(h, sat, lte)
    const key = keyword(c)
    colors.push({
      key,
      value: createShades('' + c.hex()),
    })
  })

  const obj = Object.assign({
    base: hex,
  }, colors.reduce(toObj, {}))

  return obj
}

module.exports = palx
