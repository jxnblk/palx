
const url = require('url')
const { parse } = require('querystring')
const { createElement: h } = require('react')
const { renderToStaticMarkup: render } = require('react-dom/server')
const { cxs } = require('axs')
const App = require('./components/App')

module.exports = (req, res) => {
  const { pathname, query } = url.parse(req.url)
  const q = parse(query)
  if (q.color) {
    res.writeHead(302,  {
      Location: '/' + q.color
    })
    res.end()
  }

  const [ , color ] = pathname.split('/')

  const html = render(h(App, {
    color: color || '07c'
  }))
  const css = cxs.css

  cxs.clear()
  cxs.sheet.flush()

  return `<!DOCTYPE html>
  <style>${css}</style>
  ${html}`
}

