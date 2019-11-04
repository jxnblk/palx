const chroma = require('chroma-js')

const names = [
  'red',      // 0
  'orange',   // 30
  'yellow',   // 60
  'lime',     // 90
  'green',    // 120
  'teal',     // 150
  'cyan',     // 180
  'blue',     // 210
  'indigo',   // 240
  'violet',   // 270
  'fuschia',  // 300
  'pink',     // 330
  'red',      // 360
]

const hueName = h => {
  const i = Math.round((h - 2) / 30)
  const name = names[i]
  return name
}

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

const createArray = length => {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(i)
  }
  return arr
}

const createHues = length => {
  const hueStep = 360 / length
  return base => {
    const hues = createArray(length)
      .map(n => Math.floor((base + (n * hueStep)) % 360))

    return hues
  }
}

const desat = n => hex => {
  const [ h, s, l ] = chroma(hex).hsl()
  return chroma.hsl(h, n, l).hex()
}

const createBlack = hex => {
  const d = desat(1/8)(hex)
  return chroma(d).luminance(.05).hex()
}

const createShades = hex => {
  return lums.map(lum => {
    return chroma(hex).luminance(lum).hex()
  })
}

// Mappers
const keyword = hex => {
  const [ hue, sat ] = chroma(hex).hsl()
  if (sat < .5) {
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
    value: createBlack('' + color.hex())
  })

  colors.push({
    key: 'gray',
    value: createShades(desat(1/8)('' + color.hex()))
  })

  hues.forEach(h => {
    const c = chroma.hsl(h, sat, lte)
    const key = keyword(c)
    colors.push({
      key,
      value: createShades('' + c.hex())
    })
  })

  const obj = Object.assign({
    base: hex,
  }, colors.reduce(toObj, {}))

  return obj
}

module.exports = palx
