
import test from 'ava'
import chroma from 'chroma-js'
import pal from '../src'

const src = {
  blue: '#07c',
  red: '#f40'
}

let colors

test('is a function', t => {
  t.is(typeof pal, 'function')
})

test('returns an object', t => {
  colors = pal(src)
  t.is(typeof colors, 'object')
})

test('returns the base color hex', t => {
  t.notThrows(() => {
    chroma(colors.blue)
    chroma(colors.red)
  })
  t.is(chroma(src.blue).hex(), colors.base)
  t.is(chroma(src.blue).hex(), colors.blue)
  t.is(chroma(src.red).hex(), colors.red)
})

test('returns a rotate function', t => {
  t.is(typeof colors.rotate, 'function')
  t.is(typeof colors.rotate(60), 'object')
})

test('rotates a color', t => {
  let rotated
  t.notThrows(() => {
    rotated = colors.rotate(60).blue
    chroma(rotated)
  })
  const [ h ] = chroma(src.blue).hsl()
  t.is(typeof rotated, 'string')
  t.is(h + 60, chroma(rotated).hsl()[0])
})

test('returns a darken function', t => {
  t.is(typeof colors.darken, 'function')
  t.is(typeof colors.darken(.5), 'object')
})

test('darkens a color', t => {
  let dark
  t.notThrows(() => {
    dark = colors.darken(.5).blue
    chroma(dark)
  })
  t.is(typeof dark, 'string')
  t.is(chroma(src.blue).darken(.5).css(), dark)
})

test('returns a lighten function', t => {
  t.is(typeof colors.lighten, 'function')
  t.is(typeof colors.lighten(.5), 'object')
})

test('lightens a color', t => {
  let light
  t.notThrows(() => {
    light = colors.lighten(.5).blue
    chroma(light)
  })
  t.is(typeof light, 'string')
  t.is(chroma(src.blue).brighten(.5).css(), light)
})

test('returns an alpha function', t => {
  t.is(typeof colors.alpha, 'function')
  t.is(typeof colors.alpha(.5), 'object')
})

test('makes a color transparent', t => {
  let alpha
  t.notThrows(() => {
    alpha = colors.alpha(.5).blue
    chroma(alpha)
  })
  t.is(typeof alpha, 'string')
  t.is(chroma(src.blue).alpha(.5).css(), alpha)
})

test('returns a saturate function', t => {
  t.is(typeof colors.saturate, 'function')
  t.is(typeof colors.saturate(.5), 'object')
})

test('saturates a color', t => {
  let sat
  t.notThrows(() => {
    sat = colors.saturate(.5).blue
    chroma(sat)
  })
  t.is(typeof sat, 'string')
  t.is(chroma(src.blue).saturate(.5).css(), sat)
})

test('returns a desaturate function', t => {
  t.is(typeof colors.desaturate, 'function')
  t.is(typeof colors.desaturate(.5), 'object')
})

test('desaturates a color', t => {
  let desat
  t.notThrows(() => {
    desat = colors.desaturate(.5).blue
    chroma(desat)
  })
  t.is(typeof desat, 'string')
  t.is(chroma(src.blue).desaturate(.5).css(), desat)
})

test('returns an alpha0-8 objects', t => {
  t.is(typeof colors.alpha0, 'object')
  t.is(typeof colors.alpha1, 'object')
  t.is(typeof colors.alpha2, 'object')
  t.is(typeof colors.alpha3, 'object')
  t.is(typeof colors.alpha4, 'object')
  t.is(typeof colors.alpha5, 'object')
  t.is(typeof colors.alpha6, 'object')
  t.is(typeof colors.alpha7, 'object')
  t.is(typeof colors.alpha8, 'object')
})

test('returns an darken0-8 objects', t => {
  t.is(typeof colors.darken0, 'object')
  t.is(typeof colors.darken1, 'object')
  t.is(typeof colors.darken2, 'object')
  t.is(typeof colors.darken3, 'object')
  t.is(typeof colors.darken4, 'object')
  t.is(typeof colors.darken5, 'object')
  t.is(typeof colors.darken6, 'object')
  t.is(typeof colors.darken7, 'object')
  t.is(typeof colors.darken8, 'object')
})

test('returns an lighten0-8 objects', t => {
  t.is(typeof colors.lighten0, 'object')
  t.is(typeof colors.lighten1, 'object')
  t.is(typeof colors.lighten2, 'object')
  t.is(typeof colors.lighten3, 'object')
  t.is(typeof colors.lighten4, 'object')
  t.is(typeof colors.lighten5, 'object')
  t.is(typeof colors.lighten6, 'object')
  t.is(typeof colors.lighten7, 'object')
  t.is(typeof colors.lighten8, 'object')
})

test('adds five hues', t => {
  console.log(colors)
})
