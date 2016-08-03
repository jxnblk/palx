
import h from 'h0'
import palx from '../src'

const div = document.getElementById('app')

const colors = palx({
  // blue: '#07c'
  //blue: '#0cf'
  blue: '#08d'
})

console.log(colors)

const Chip = (hex, key = '') => h('div')({
  style: {
    display: 'inline-block',
    width: 128,
    height: 96,
    backgroundColor: hex
  }
})(key)

const html = h('div')(
  h('h1')('hello palx'),
  h('pre')(`const colors = palx({ blue: '#08d' })`),
  Chip(colors.blue),

  h('div')(
    h('h2')('Generated'),
    ...colors.keys.map(k => (
      Chip(colors[k], k)
    )),
  ),

  h('div')(
    h('h2')('darken'),
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
    h('h2')('lighten'),
    Chip(colors.lighten1.blue),
    Chip(colors.lighten2.blue),
    Chip(colors.lighten3.blue),
    Chip(colors.lighten4.blue),
    Chip(colors.lighten5.blue),
    Chip(colors.lighten6.blue),
    Chip(colors.lighten7.blue),
    Chip(colors.lighten8.blue)
  ),
  h('div')(
    h('h2')('alpha'),
    Chip(colors.alpha1.blue),
    Chip(colors.alpha2.blue),
    Chip(colors.alpha3.blue),
    Chip(colors.alpha4.blue),
    Chip(colors.alpha5.blue),
    Chip(colors.alpha6.blue),
    Chip(colors.alpha7.blue),
    Chip(colors.alpha8.blue)
  ),
  h('div')(
    h('h2')('saturate'),
    Chip(colors.saturate1.blue),
    Chip(colors.saturate2.blue),
    Chip(colors.saturate3.blue),
    Chip(colors.saturate4.blue),
    Chip(colors.saturate5.blue),
    Chip(colors.saturate6.blue),
    Chip(colors.saturate7.blue),
    Chip(colors.saturate8.blue)
  ),
  h('div')(
    h('h2')('desaturate'),
    Chip(colors.desaturate1.blue),
    Chip(colors.desaturate2.blue),
    Chip(colors.desaturate3.blue),
    Chip(colors.desaturate4.blue),
    Chip(colors.desaturate5.blue),
    Chip(colors.desaturate6.blue),
    Chip(colors.desaturate7.blue),
    Chip(colors.desaturate8.blue)
  ),

)

div.appendChild(html)

