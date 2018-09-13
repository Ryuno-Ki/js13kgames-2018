/**
 * Get the server index for the application state.
 *
 * @module tilesets/maze/servers/serverIndex
 * @exports serverIndex
 */

/**
 * Computes the key from the index for a server.
 *
 * @public
 * @function
 * @arg { number } index           - Zero-based index.
 * @returns { string } serverIndex - Key for game sub-state.
 */
const serverIndex = function (index) {
  return 's' + (1 + index)
}

export default serverIndex
