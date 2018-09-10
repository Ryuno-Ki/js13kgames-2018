import constants from '../../constants'

// index start at 0
// x and y start at 1
const indexToXY = function (index) {
  const { c } = constants
  const x = 1 + (index % c)
  const y = 1 + (index - (x - 1)) / c
  return { x, y }
}

export default indexToXY
