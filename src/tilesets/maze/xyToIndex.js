import constants from '../../constants'

/**
 * Maps a position to an index.
 *
 * @module tilesets/maze/xyToIndex
 * @exports xyToIndex
 * @requires constants
 */

/** Takes a position and computes its index within the maze.
 *
 * @public
 * @function
 * @arg { number } x         - The coordinate along the columns.
 * @arg { number } y         - The coordinate along the rows.
 * @returns { number } index - The index in 1D maze.
 */
const xyToIndex = function (x, y) {
  // x and y start at 1
  // index start at 0
  const { c } = constants
  const index = (x - 1) + (y - 1) * c
  // For debugging
  // console.log(`${ x }/${ y } => ${ index }`)
  return index
}

export default xyToIndex
