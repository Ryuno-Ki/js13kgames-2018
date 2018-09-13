import find from '../tilesets/maze/servers/find'
import get from '../tilesets/maze/servers/get'
import serverIndex from '../tilesets/maze/servers/serverIndex'

/**
 * Updates the maze in the game sub-state with information regarding servers.
 *
 * @module store/servers
 * @exports servers
 * @requires module:tilesets/maze/servers/find
 * @requires module:tilesets/maze/servers/get
 * @requires module:tilesets/maze/servers/serverIndex
 */

/**
 * Updates the servers part of the game sub-state.
 *
 * @public
 * @function
 * @arg { object } currentState - The current application state.
 */
const servers = function (currentState) {
  const gameState = currentState.gm
  const { m, l } = gameState

  /*
   * Gets the indices of all servers within maze.
   * Then look up its new value from the state and update the state in-place.
   */
  const serverIndices = find(m)
  serverIndices.forEach((index, i) => {
    const sIndex = serverIndex(i)
    const serverState = gameState[ sIndex ]

    const serverTile = get('', i, serverState)
    m[ index ] = serverTile.value
  })
}

export default servers
