import constants from '../../constants'

/**
 * Represents a list of modems.
 *
 * @module tilesets/maze/modem
 * @exports modem
 * @requires constants
 */

/**
 * Gives a list of modems back. By design, it is exactly one.
 *
 * @public
 * @function
 * @returns { Array<object> } - The modem tile object.
 */
const modem = function () {
  const { r, c, m } = constants

  const modemTile = {
    x: c,
    y: r - 1,
    value: m
  }
  return [ modemTile ]
}

export default modem
