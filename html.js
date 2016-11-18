
module.exports = ({ css, body, color }) => (`
<!DOCTYPE html>
<meta name='charset' content='utf-8'>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<title>Palx</title>
<meta name='description' content='Automatic UI Color Palette Generator'>
<meta name='twitter:card' content='summary_large_image'>
<meta name='twitter:site' content='@jxnblk'>
<meta name='twitter:title' content='Palx ${color}'>
<meta name='twitter:description' content='Automatic UI Color Palette Generator'>
<meta name='twitter:image' content='https://palx.jxnblk.com/${color.replace(/^#/, '')}/card.png'>
<style>${css}</style>
${body}
`)

