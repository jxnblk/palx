
const { createElement: h } = require('react')
const { renderToStaticMarkup: render } = require('react-dom/server')
const { cxs } = require('axs')

const html = require('./html')
const Header = require('./components/Header')
const Form = require('./components/Form')
const Toc = require('./components/Toc')
const Colors = require('./components/Colors')
const Downloads = require('./components/Downloads')
const Footer = require('./components/Footer')

const renderChunk = (Comp, props) => {
  const chunk = render(h(Comp, props))
  const ht = `<style>${cxs.css}</style>${chunk}`
  cxs.reset()
  return ht
}

module.exports = (req, res, { color, colors }) => {
  res.setHeader('Content-Type', 'text/html')

  res.write(html.head({ color }))

  res.write('<div style="max-width:1024px;margin:auto;padding:32px">')

  res.write(renderChunk(Header, { color, colors }))
  res.write(renderChunk(Form, { color, colors }))
  res.write(renderChunk(Toc, { colors }))
  res.write(renderChunk(Colors, { colors }))
  res.write(renderChunk(Downloads, { color, colors }))
  res.write(renderChunk(Footer, { color }))

  res.write('</div>')
  res.end()
}
