const { createElement: h } = require('react')
const Base = require('./Base')

const cap = str => str.charAt(0).toUpperCase() + str.slice(1)

module.exports = ({ colors }) => {
  return h(Base, {
      mx: -2,
      my: [ 2, 3 ],
      css: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    },
    Object.keys(colors)
    .filter(key => Array.isArray(colors[key]))
    .map(key => (
      h(Base, {
        key,
        is: 'a',
        href: '#' + key,
        px: 2,
        py: 2,
        width: [
          1/5,
          1/7,
          1/13
        ],
        css: {
          textDecoration: 'none',
          transition: '.2s ease-out',
          transitionProperty: 'color, background-color',
          ':hover': {
            backgroundColor: colors[key][1]
          },
          ':focus': {
            outline: 'none',
            backgroundColor: colors[key][1]
          }
        }
      },
        h(Base, {
          p: 2,
          bg: colors[key][5]
        }),
        h(Base, {
          fontSize: 0,
          textAlign: 'center',
          color: colors[key][8]
        }, cap(key))
      )
    ))
  )
}

