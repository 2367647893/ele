export function str (sName) {
  return sName.toLowerCase().replace(/^\_/, '').replace(/\_([a-zA-Z0-9])([a-zA-Z0-9]+)/g, function (a, b, c) {
    return b.toUpperCase() + c.toLowerCase()
  })
}