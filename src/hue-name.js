
const names = [
  'red',      // 0
  'yellow',   // 30 - orange
  'lime',     // 60
  'yellowgreen',    // 90
  'green',    // 120
  'teal',     // 150
  'cyan',     // 180
  'blue',     // 210
  'indigo',   // 240
  'violet',   // 270
  'grape',    // 300
  'pink',     // 330
  'red',      // 360
]

const hueName = h => {
  const i = Math.round(h / 30) - 1
  const name = names[i]
  return name
}

module.exports = hueName

