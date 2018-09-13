import constants from '../../../constants'

/**
 * Get a server tile depending on the state of the associated server.
 *
 * @module tilesets/maze/servers/get
 * @exports get
 * @requires constants
 */

/**
 * By design, the servers are lined up in the first column.
 * Determine their visual representation depending on the application state.
 *
 * @public
 * @function
 * @arg { any } _                 - Doesn't matter.
 * @arg { number } index          - The row of the server.
 * @arg { boolean } serverState   - The state of the server depending on guess.
 * @returns { object } serverTile - The server tile for rendering.
 */
const get = function (_, index, serverState) {
  const { s1, s2, s3 } = constants

  const serverTile = {
    x: 1,
    y: 1 + index,
    value: typeof serverState === 'undefined'
      ? s3
      : (serverState === true
        ? s1
        : s2)
  }
  return serverTile
}

export default get
