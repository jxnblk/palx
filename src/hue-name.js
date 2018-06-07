
const names = [
  'red',      // 0
  'orange',   // 30
  'yellow',   // 60
  'lime',     // 90
  'green',    // 120
  'teal',     // 150
  'cyan',     // 180
  'blue',     // 210
  'indigo',   // 240
  'violet',   // 270
  'fuchsia',  // 300
  'pink',     // 330
  'red',      // 360
]

const hueName = h => {
  const i = Math.round((h - 2) / 30)
  const name = names[i]
  return name
}

module.exports = hueName

