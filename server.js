
const url = require('url')
const { createElement: h } = require('react')
const { renderToStaticMarkup: render } = require('react-dom/server')
const { cxs } = require('axs')
const App = require('./components/App')

// Testing beta version
const _cxs = require('cxs').default

module.exports = (req, res) => {
  const { pathname, query } = url.parse(req.url)
  const [ , color ] = pathname.split('/')

  const html = render(h(App, { color }))
  const css = _cxs.css + cxs.css

  cxs.clear()
  cxs.sheet.flush()

  return `<!DOCTYPE html>
  <style>${css}</style>
  ${html}`
}

