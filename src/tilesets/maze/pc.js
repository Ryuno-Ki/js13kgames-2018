import constants from '../../constants'

/**
 * Represents a list of pcs.
 *
 * @module tilesets/maze/pc
 * @exports pc
 * @requires constants
 */

/**
 * Gives a list of pcs back. By design, it is exactly one.
 *
 * @public
 * @function
 * @returns { Array<object> } - The pc tiles.
 */
const pc = function () {
  const { r, c, p } = constants

  const pcTile = {
    x: r,
    y: c,
    value: p
  }
  return [ pcTile ]
}

export default pc
