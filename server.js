
const url = require('url')
const { parse } = require('querystring')
const { createElement: h } = require('react')
const { renderToStaticMarkup: render } = require('react-dom/server')
const { cxs } = require('axs')
const palx = require('./src/index')
const App = require('./components/App')
const html = require('./html')
const card = require('./card')

const robots = `User-agent: Twitterbot\n  Disallow:`

module.exports = (req, res) => {
  const { pathname, query } = url.parse(req.url)
  const q = parse(query)

  if (q.color) {
    res.writeHead(302,  {
      Location: '/' + q.color
    })
    res.end()
  }

  if (pathname === '/robots.txt') {
    return robots
  }

  const [ , base ] = pathname.split('/')
  const color = base ? '#' + base : '#07c'
  const colors = palx(color)

  if (/card\.png$/.test(pathname)) {
    return card({ color, colors }, res)
  }

  const body = render(h(App, {
    color,
    colors
  }))
  const css = cxs.css

  cxs.clear()
  cxs.sheet.flush()

  return html({ css, body, color })
}

