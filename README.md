
# Palx

```js
npm i palx
```

```js
const palx = require('palx')

const colors = palx({
  blue: '#07c',
  red: '#f40'
})

colors.blue // '#07c'
colors.red // '#f40'

colors.rotate(30).blue
```

MIT License

---
chroma + color-namer bundle 130 kB
chroma 40.5 kB

---

hue color mapper

roygbv
hue: 0 - 360

n => colorkey

options
- if/then block function
- colorkey obj with min/max - matcher func + reduce key

