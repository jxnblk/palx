export default obj => Object.keys(obj).map(key => {
  const value = obj[key]
  if (Array.isArray(value)) {
    return value.map((v, i) => ({
      key: key + i,
      value: v
    }))
  }

  return {
    key,
    value
  }
}).reduce((a, b) => {
  if (Array.isArray(b)) {
    b.forEach(({ key, value }) => {
      a[key] = value
    })
  } else {
    a[b.key] = b.value
  }
  return a
}, {})
