
module.exports = (req, res, { color, colors }) => {
  return JSON.stringify(colors, null, 2)
}

