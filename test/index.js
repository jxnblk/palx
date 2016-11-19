
import test from 'ava'
import palx from '../src'

test('returns a color object', t => {
  const colors = palx('#07c')
  t.is(typeof colors, 'object')
})

