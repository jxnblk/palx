
/*
 * API
 *
 * const colors = palx({ blue: '#07c' })
 *
 * colors.blue
 * colors.rotate(30).blue
 * colors.darken(.5).blue
 *
 * colors.dark1.blue
 *
 */

const chroma = require('chroma-js')
// const Color = require('color')
const colorNamer = require('color-namer')

const defaultOptions = {
  hues: 5,
  scales: {
    l: [
      0,
      1 / 8,
      1 / 4,
      3 / 8,
      1 / 2,
      5 / 8,
      3 / 4,
      7 / 8,
      1
    ],
    a: [
      0,
      1 / 8,
      1 / 4,
      3 / 8,
      1 / 2,
      5 / 8,
      3 / 4,
      7 / 8,
      1
    ]
  }
}

const createRotate = baseColors => keys => {
  const rotate = (n) => {
    const obj = {}
    Object.keys(baseColors).forEach(key => {
      Object.defineProperty(obj, key, {
        get: () => {
          const [ h, s, l ] = chroma(baseColors[key]).hsl()
          return chroma.hsl(h + n, s, l).hex()
        }
      })
    })
    return obj
  }

  return rotate
}

const createColorFunction = func => baseColors => keys => {
  // const getters = []
  const fn = (n) => {
    const obj = {}
    // Figure out how to hoist this up
    Object.keys(baseColors).forEach(key => {
      Object.defineProperty(obj, key, {
        get: () => {
          return chroma(baseColors[key])[func](n).css()
          // return baseColors[key].clone()[func](n).rgbString()
        }
      })
    })
    return obj
  }

  return fn
}

// const createRotate = createColorFunction('rotate')
const createDarken = createColorFunction('darken')
const createLighten = createColorFunction('brighten')
const createSaturate = createColorFunction('saturate')
const createDesaturate = createColorFunction('desaturate')
const createAlpha = createColorFunction('alpha')

const palx = (
  input = {},
  {
    // Options
    hues = 5,
    lightnessScale = [
      0,
      1 / 8,
      1 / 4,
      3 / 8,
      1 / 2,
      5 / 8,
      3 / 4,
      7 / 8,
      1
    ],
    saturationScale = [
      0,
      1 / 8,
      1 / 4,
      3 / 8,
      1 / 2,
      5 / 8,
      3 / 4,
      7 / 8,
      1
    ],
    alphaScale = [
      0,
      1 / 8,
      1 / 4,
      3 / 8,
      1 / 2,
      5 / 8,
      3 / 4,
      7 / 8,
      1
    ]
  } = {}
) => {
  const keys = Object.keys(input)
  const [ k1 ] = keys
  const base = chroma(input[k1]) // Color(input[k1])
  const hueShift = 360 / hues

  const baseColors = {}

  const colors = {
    get base () {
      return base.hex()
    }
  }

  // Add hues
  for (var i = 0; i < hues; i++) {
    const [ h, s, l ] = base.hsl()
    const angle = i * hueShift
    const color = chroma.hsl(h + angle, s, l) // base.rotate(angle)
    const { name } = colorNamer(color.hex()).roygbiv[0]

    if (!baseColors[name] && keys.indexOf(name) < 0) {
      baseColors[name] = color.hex()

      Object.defineProperty(colors, name, {
        get: () => baseColors[name]
      })
    }
  }

  keys.forEach(key => {
    baseColors[key] = chroma(input[key]).hex() // Color(input[key])

    Object.defineProperty(colors, key, {
      get: () => {
        return baseColors[key]
      }
    })
  })

  colors.rotate = createRotate(baseColors)(keys)
  colors.darken = createDarken(baseColors)(keys)
  colors.lighten = createLighten(baseColors)(keys)
  colors.saturate = createSaturate(baseColors)(keys)
  colors.desaturate = createDesaturate(baseColors)(keys)
  colors.alpha = createAlpha(baseColors)(keys)

  alphaScale.forEach((a, i) => {
    colors['alpha' + i] = colors.alpha(a)
  })

  lightnessScale.forEach((l, i) => {
    colors['darken' + i] = colors.darken(l)
  })

  lightnessScale.forEach((l, i) => {
    colors['lighten' + i] = colors.lighten(l)
  })

  return colors
}

module.exports = palx

