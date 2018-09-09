import sizes from '../sizes'

// x and y start at 1
// index start at 0
const xyToIndex = function (x, y) {
  const { cols } = sizes
  const index = (x - 1) + (y - 1) * cols
  // For debugging
  // console.log(`${ x }/${ y } => ${ index }`)
  return index
}

export default xyToIndex
