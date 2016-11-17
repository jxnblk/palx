
const names = [
  'red',      // 0
  'orange',   // 30
  'yellow',   // 60
  'green',    // 90
  'seafoam',  // 120
  'teal',     // 150
  'cyan',     // 180
  'blue',     // 210
  'indigo',   // 240
  'violet',   // 270
  'grape',    // 300
  'pink',     // 330
  'red',      // 360
]

const offset = 29

const hueName = h => {
  const i = Math.round((h + offset) / 30) - 1
  const name = names[i]
  return name
}

module.exports = hueName

