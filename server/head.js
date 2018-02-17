
const min = str => str.replace(/^\s+/g, '')
  .replace(/\n/g, '')

module.exports = ({ color }) => min(`
  <!DOCTYPE html>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1'>
  <title>Palx</title>
  <meta name='description' content='Automatic UI Color Palette Generator'>
  <meta name='twitter:card' content='summary_large_image'>
  <meta name='twitter:site' content='@jxnblk'>
  <meta name='twitter:title' content='Palx ${color}'>
  <meta name='twitter:description' content='Automatic UI Color Palette Generator'>
  <meta name='twitter:image' content='https://palx.jxnblk.com/${color.replace(/^#/, '')}/card.png'>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto+Mono:400'>
  <style>
    * { box-sizing: border-box }
    body {
      font-family: system-ui, sans-serif;
      margin: 0;
      line-height: 1.5;
      color: var(--black);
    }
  </style>
`)

