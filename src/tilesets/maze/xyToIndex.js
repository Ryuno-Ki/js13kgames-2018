import constants from '../../constants'

// x and y start at 1
// index start at 0
const xyToIndex = function (x, y) {
  const { c } = constants
  const index = (x - 1) + (y - 1) * c
  // For debugging
  // console.log(`${ x }/${ y } => ${ index }`)
  return index
}

export default xyToIndex
