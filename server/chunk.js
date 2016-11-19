
const { createElement: h } = require('react')
const { renderToStaticMarkup: render } = require('react-dom/server')
const { cxs } = require('axs')

const head = require('./head')
const Header = require('./components/Header')
const Form = require('./components/Form')
const Toc = require('./components/Toc')
const About = require('./components/About')
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

  res.write(head({ color }))

  res.write('<div style="max-width:1280px;margin:auto;padding:32px">')

  res.write(renderChunk(Header, { color, colors }))
  res.write(renderChunk(Form, { color, colors }))
  res.write(renderChunk(Toc, { colors }))
  res.write(renderChunk(About))
  res.write(renderChunk(Colors, { colors }))
  res.write(renderChunk(Downloads, { color, colors }))
  res.write(renderChunk(Footer, { color }))
  res.write('</div>')

  res.write(`<script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-4603832-6", "auto");ga("send", "pageview");</script>`)
  res.end()
}
