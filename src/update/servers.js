import serverIndex from '../tilesets/maze/servers/serverIndex'
import store from '../store'

/**
 * Updates the state of the server tiles in the game sub-state.
 *
 * @module update/servers
 * @exports servers
 * @requires module:tilesets/maze/servers/serverIndex
 * @requires module:store
 */

/**
 * Looks up the response of mastermind to set the state for server tiles.
 *
 * @public
 * @function
 * @arg { object } state    - The application state.
 * @arg { object } response - A response object of mastermind.
 */
const servers = function (state, response) {
  const { m, l } = state.gm
  const { correctPosition, correctNumber } = response

  const values = []
  /*
   * Looking at the screens you can see green (g) and red (r) LEDs resp.
   * a black (b) screen.
   * Values shall contain the information how many of which to display.
   */
  for (let g = 0; g < correctPosition; g++) { values.push(true) }
  for (let r = 0; r < correctNumber; r++) { values.push(false) }
  let len = values.length
  for (let b = len; b < l; b++) { values.push(undefined) }

  /* Since we want to have them nicely lined up, sort them.
   * Inverse the order as seen for the swithces.
   */
  values.sort()
  values.reverse()
  len = values.length
  for (let i = 0; i < len; i++) {
    const value = values.pop()
    const sIndex = serverIndex(i)
    state.gm[ sIndex ] = value
  }
  store.setState(state)
}

export default servers
