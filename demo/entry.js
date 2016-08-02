
import h from 'h0'
import palx from '../src'

const div = document.getElementById('app')

const colors = palx({
  blue: '#07c'
})

console.log(colors)

const Chip = (hex) => h('div')({
  style: {
    display: 'inline-block',
    width: 48,
    height: 48,
    backgroundColor: hex
  }
})()

const html = h('div')(
  h('h1')('hello'),
  Chip(colors.blue),
  Chip(colors.red),
  Chip(colors.yellow),
  Chip(colors.green),
  Chip(colors.indigo),
  h('div')(
    Chip(colors.darken1.blue),
    Chip(colors.darken2.blue),
    Chip(colors.darken3.blue),
    Chip(colors.darken4.blue),
    Chip(colors.darken5.blue),
    Chip(colors.darken6.blue),
    Chip(colors.darken7.blue),
    Chip(colors.darken8.blue)
  ),
  h('div')(
    Chip(colors.darken1.yellow),
    Chip(colors.darken2.yellow),
    Chip(colors.darken3.yellow),
    Chip(colors.darken4.yellow),
    Chip(colors.darken5.yellow),
    Chip(colors.darken6.yellow),
    Chip(colors.darken7.yellow),
    Chip(colors.darken8.yellow)
  ),
  h('div')(
    Chip(colors.darken1.green),
    Chip(colors.darken2.green),
    Chip(colors.darken3.green),
    Chip(colors.darken4.green),
    Chip(colors.darken5.green),
    Chip(colors.darken6.green),
    Chip(colors.darken7.green),
    Chip(colors.darken8.green)
  ),
  h('div')(
    Chip(colors.darken1.red),
    Chip(colors.darken2.red),
    Chip(colors.darken3.red),
    Chip(colors.darken4.red),
    Chip(colors.darken5.red),
    Chip(colors.darken6.red),
    Chip(colors.darken7.red),
    Chip(colors.darken8.red)
  ),
)

div.appendChild(html)

