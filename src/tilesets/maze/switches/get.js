import constants from '../../../constants'

/**
 * Get a switch tile depending on the state of the associated swithc.
 *
 * @module tilesets/maze/switches/get
 * @exports get
 * @requires constants
 */

/**
 * By design, the switches are lined up in the last row.
 * Determine their visual representation depending on the application state.
 *
 * @public
 * @function
 * @arg { any } _                 - Doesn't matter.
 * @arg { number } index          - The column of switch. Counted backwards.
 * @arg { boolean } buttonState   - The state of the switch depending on user.
 * @returns { object } switchTile - The switchTile tile for rendering.
 */
const get = function (_, index, buttonState) {
  const { r, c, b1, b2, b3 } = constants

  const switchTile = {
    x: c - (1 + index),
    y: r,
    value: typeof buttonState === 'undefined'
      ? b2
      : (buttonState === true
        ? b1
        : b3)
  }
  return switchTile
}

export default get
