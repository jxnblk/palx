
import test from 'ava'
import palx from '../src'

const amt = n => n * 4

test('returns a color object', t => {
  const colors = palx('#07c')
  t.is(typeof colors, 'object')
})

test('adjusts desaturation amount', t => {
  console.log('0', amt(0))

  console.log('1', amt(1/8))
  console.log('2', amt(2/8))
  console.log('3', amt(3/8))
  console.log('4', amt(4/8))
  console.log('5', amt(5/8))
  console.log('6', amt(6/8))
  console.log('7', amt(7/8))

  console.log('8', amt(1))
})

