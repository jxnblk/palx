
const url = require('url')
const { parse } = require('querystring')
const chroma = require('chroma-js')
const palx = require('./src/index')

const chunkResponse = require('./chunk-response')
const card = require('./card')
const json = require('./json')
const css = require('./css')
const scss = require('./scss')

const robots = `User-agent: Twitterbot\n  Disallow:`

const isColor = hex => {
  try {
    const color = chroma(hex)
    return true
  } catch (e) {
    return false
  }
}

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

  if (!isColor(color)) {
    const err = new Error('Bad request')
    err.statusCode = 400
    throw err
  }

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

  chunkResponse(req, res, { color, colors })
}

