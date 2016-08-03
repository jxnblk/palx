
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

const createRotate = baseColors => keys => {
  const rotate = (n) => {
    const obj = {}
    Object.keys(baseColors).forEach(key => {
      Object.defineProperty(obj, key, {
        get: () => {
          const [ h, s, l ] = chroma(baseColors[key]).hsl()
          const hue = (360 + h + n) % 360
          return chroma.hsl(hue, s, l).hex()
        }
      })
    })
    return obj
  }

  return rotate
}

const getName = hue => {
  const mins = {
    red:      0,
    orange:  30,
    yellow:  60,
    green:   90,
    cyan:    170,
    blue:    200,
    purple:  260,
    magenta: 320,
  }

  const isMatch = n => min => {
    return n >= min
  }

  const matcher = isMatch(hue)

  const name = Object.keys(mins).reduce((a, b) => {
    return (matcher(mins[b]) ? b : a)
  }, null)

  return name
}

const createColorFunction = func => baseColors => keys => {
  const fn = (n) => {
    const obj = {}
    // Figure out how to hoist this up
    Object.keys(baseColors).forEach(key => {
      Object.defineProperty(obj, key, {
        get: () => {
          return chroma(baseColors[key])[func](n).css()
        }
      })
    })
    return obj
  }

  return fn
}

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
      4 * 1 / 8,
      4 * 1 / 4,
      4 * 3 / 8,
      4 * 1 / 2,
      4 * 5 / 8,
      4 * 3 / 4,
      4 * 7 / 8,
      4 * 1
    ],
    saturationScale = [
      0,
      2 * 1 / 8,
      2 * 1 / 4,
      2 * 3 / 8,
      2 * 1 / 2,
      2 * 5 / 8,
      2 * 3 / 4,
      2 * 7 / 8,
      2 * 1
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
  const base = chroma(input[k1])
  const hueShift = 360 / hues

  const baseColors = {}

  const colors = {
    get base () {
      return base.hex()
    },
    keys: [...keys]
  }

  // Add hues
  for (var i = 0; i < hues; i++) {
    const [ h, s, l ] = base.hsl()
    const angle = (1 + i) * hueShift
    const hue = (h + angle) % 360
    const color = chroma.hsl(hue, s, l)
    // const { name } = colorNamer(color.hex()).roygbiv[0]
    const name = getName(hue)

    if (!baseColors[name] && keys.indexOf(name) < 0) {
      colors.keys.push(name)
      baseColors[name] = color.hex()

      Object.defineProperty(colors, name, {
        get: () => baseColors[name]
      })
    }
  }

  keys.forEach(key => {
    baseColors[key] = chroma(input[key]).hex()

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

  saturationScale.forEach((s, i) => {
    colors['saturate' + i] = colors.saturate(s)
  })

  saturationScale.forEach((s, i) => {
    colors['desaturate' + i] = colors.desaturate(s)
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

