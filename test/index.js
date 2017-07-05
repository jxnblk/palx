
import test from 'ava'
import palx from '../src'

test('returns a color object', t => {
  const colors = palx('#07c')
  t.is(typeof colors, 'object')
})

test('generates a supplementary color array', t => {
  const orange = '#ff8000'
  const colors = palx('#07c', {
    colors: { orange }
  })
  t.is(colors.orange[6], '#dd8d54')
  t.is(colors.hasOwnProperty('orange2'), true)
})

test('replaces default colors with user options', t => {
  const orange = '#ff8000'
  const colors = palx('#07c', {
    colors: { orange },
    replace: true
  })
  t.is(colors.orange[6], '#fa7d00')
  t.is(colors.hasOwnProperty('orange2'), false)
})

