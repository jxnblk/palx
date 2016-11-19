
# Palx

Automatic UI Color Palette Generator

https://palx.jxnblk.com

```js
npm i palx
```

Provide a single color value and Palx returns a full-spectrum color palette,
well suited for UI design and data visualizations that work harmoniously with brand colors.

```js
const palx = require('palx')

palx('#07c')
// Returns a color object with
// 12 hues and a gray spread across
// 10 luminance steps
```

## About

Inspired by [Open Color](https://yeun.github.io/open-color/),
Palx takes a single input color,
then spreads the hue across the color spectrum in 12 steps,
and spreads each hue across 10 luminance steps.
Palx also desaturates the main color to create shades of gray and a black that are based off the original color.

### Related

- [Hello Color](http://jxnblk.com/hello-color)
- [Colorable](http://jxnblk.com/colorable)
- [Monochrome](https://monochrome.jxnblk.com)
- [Grays](http://jxnblk.com/grays)
- [Shade](http://jxnblk.com/shade)
- [Spectral](http://jxnblk.com/Spectral)
- [Open Color](https://yeun.github.io/open-color)

MIT License

