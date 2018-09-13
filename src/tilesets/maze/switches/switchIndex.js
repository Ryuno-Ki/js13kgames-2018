/**
 * Get the switch index for the application state.
 *
 * @module tilesets/maze/switches/switchIndex
 * @exports switchIndex
 */

/**
 * Computes the key from the index for a switch.
 *
 * @public
 * @function
 * @arg { number } index           - Zero-based index.
 * @returns { string } switchIndex - Key for game sub-state.
 */
const switchIndex = function (index) {
  /*
   * b as in button, since s is reserved for server.
   */
  return 'b' + (1 + index)
}

export default switchIndex
