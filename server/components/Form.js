const { createElement: h } = require('react')
const chroma = require('chroma-js')
const { Arrow } = require('reline')

const Base = require('./Base')
const Label = require('./Label')
const Input = require('./Input')
const Button = require('./Button')

const dehash = str => str.replace(/^#/, '')

module.exports = ({
  color,
  colors
}) => {
  return h(Base, {
      mb: 3
    },
    h(Label, {
      htmlFor: 'color'
    }, 'Base Color'),
    h(Base, {
      is: 'form',
      action: '/',
      mx: -1,
      css: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    },
      h(Base, {
        css: {
          display: 'flex',
        },
        width: [
          1,
          1/3,
          1/5,
        ],
        px: 1
      },
        h(Base, {
          width: 1,
          py: 3,
          bg: color
        })
      ),
      h(Base, {
        width: [
          1,
          2/3,
          4/5,
        ],
        px: 1,
        css: {
          display: 'flex',
          fontFamily: '"Roboto Mono", Menlo, monospace'
        }
      },
        h(Base, {
          fontSize: 6,
          css: {
            position: 'relative'
          }
        }, '#'),
        h(Input, {
          id: 'color',
          name: 'color',
          defaultValue: dehash(color),
          pattern: '([0-9A-Fa-f]{3}){1,2}',
          colors,
          fontSize: 6,
          css: {
            paddingLeft: '1em',
            marginLeft: '-1em'
          }
        }),
        h(Button, {
          p: 1,
          color,
          title: 'Change Color'
        },
          h(Arrow, {
            strokeWidth: 2.25,
            size: 32
          })
        )
      )
    )
  )
}

