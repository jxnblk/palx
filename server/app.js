const {
  createElement: h,
  Fragment
} = require('react')
const { renderToStaticNodeStream } = require('react-dom/server')

const head = require('./head')
const Header = require('./components/Header')
const Form = require('./components/Form')
const Toc = require('./components/Toc')
const About = require('./components/About')
const Colors = require('./components/Colors')
const Downloads = require('./components/Downloads')
const Footer = require('./components/Footer')

module.exports = (req, res, { color, colors }) => {
  res.setHeader('Content-Type', 'text/html')

  res.write(head({ color }))
  res.write('<div style="max-width:1280px;margin:auto;padding:32px">')

  const stream = renderToStaticNodeStream(
    h(Fragment, null,
      h(Header, { color, colors }),
      h(Form, { color, colors }),
      h(Toc, { colors }),
      h(About),
      h(Colors, { colors }),
      h(Downloads, { color, colors }),
      h(Footer, { color })
    )
  )

  stream.pipe(res, { end: false })

  stream.on('end', () => {
    res.write('</div>')
    res.write(`<script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-4603832-6", "auto");ga("send", "pageview");</script>`)
    res.end()
  })

  stream.on('error', err => {
    console.log(err)
    res.end()
  })
}
