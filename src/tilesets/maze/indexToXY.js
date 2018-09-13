import constants from '../../constants'

/**
 * Maps an index to a position.
 *
 * @module tilesets/maze/indexToXY
 * @exports indexToXY
 * @requires constants
 */

/**
 * Takes an index and computes its position in 2D given the grid.
 * 
 * @public
 * @function
 * @arg { number } index        - The index in 1D maze.
 * @returns { object } coords   - The coordinates on the grid.
 * @returns { number } coords.x - The coordinates along the columns.
 * @returns { number } coords.y - The coordinates along the rows.
 */
const indexToXY = function (index) {
  /*
   * index start at 0
   * x and y start at 1
   */
  const { c } = constants
  const x = 1 + (index % c)
  const y = 1 + (index - (x - 1)) / c
  return { x, y }
}

export default indexToXY
