
// Responds with a png image for Twitter cards

const { createElement: h } = require('react')
const repng = require('repng')

const css = `
body{margin:0}
`

const Card = ({ color, colors }) => {
  const key = Object.keys(colors)[3]
  const secondaryColors = colors[key]

  return h('div', {
    },
    h('style', {
      dangerouslySetInnerHTML: {
        __html: css
      }
    }),
    h('svg', {
      viewBox: '0 0 64 48',
      width: 512,
      height: 384,
      style: {
        display: 'block',
        margin: 0
      }
    },
      h('rect', { width: 64, height: 48, fill: color }),
      h('g', null,
        secondaryColors.map((c, i) => (
          h('rect', {
            key: i,
            width: 12.8,
            height: 8,
            x: (i % 5 * 12.8),
            y: (i > 4 ? 32 : 40),
            fill: c
          })
        ))
      )
    )
  )
}

module.exports = (props, res) => {
  const png = repng(Card, {
    width: 512,
    height: 384,
    scale: 2,
    props
  })

  res.setHeader('Content-Type', 'image/png')

  png.then(streams => {
    streams.forEach(stream => {
      stream.pipe(res)
    })
  })
}

