import sizes from '../sizes'

// index start at 0
// x and y start at 1
const indexToXY = function (index) {
  const { cols } = sizes
  const x = 1 + (index % cols)
  const y = 1 + (index - (x - 1)) / cols
  return { x, y }
}

export default indexToXY
