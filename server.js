
const url = require('url')
const { parse } = require('querystring')
const { createElement: h } = require('react')
const { renderToStaticMarkup: render } = require('react-dom/server')
const { cxs } = require('axs')
const palx = require('./src/index')
const App = require('./components/App')
const html = require('./html')
const card = require('./card')
const json = require('./json')
const css = require('./css')
const scss = require('./scss')

const robots = `User-agent: Twitterbot\n  Disallow:`

module.exports = (req, res) => {
  const { pathname, query } = url.parse(req.url)
  const q = parse(query)

  if (q.color) {
    res.writeHead(302,  {
      Location: '/' + q.color
    })
    res.end()
    return
  }

  if (pathname === '/robots.txt') {
    return robots
  }

  const [ , base ] = pathname.split(/[\/\.]/)
  const color = base ? '#' + base : '#07c'
  const colors = palx(color)

  if (/card\.png$/.test(pathname)) {
    return card({ color, colors }, res)
  }

  if (/\.json$/.test(pathname)) {
    return json(req, res, { colors })
  }
  if (/\.css/.test(pathname)) {
    return css(req, res, { colors })
  }
  if (/\.scss/.test(pathname)) {
    return scss(req, res, { colors })
  }

  res.setHeader('Content-Type', 'text/html')

  res.write(html.head({ color }))

  const body = render(h(App, {
    color,
    colors
  }))
  const styles = cxs.css
  cxs.clear()
  cxs.sheet.flush()

  res.write(html.css({ css: styles }))
  res.write(body)
  res.end()
}

