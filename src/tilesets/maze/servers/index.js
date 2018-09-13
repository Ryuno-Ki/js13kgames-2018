import store from '../../../store'
import switchIndex from '../switches/switchIndex'
import get from './get'

/**
 * Get a list of server tiles with the correct ID.
 *
 * @module tilesets/maze/servers
 * @exports servers
 * @requires module:store
 * @requires module:tilesets/maze/switches/switchIndex
 * @requires module:tilesets/maze/servers/get
 */

/**
 * Look up the application state to compute the correct visual.
 *
 * @public
 * @function
 * @returns { Array<object> } serverTiles -  List of server tiles.
 */
const servers = function () {
  const gameState = store.state().gm
  const { l } = gameState

  const emptyServerTiles = new Array(l)
  const serverTiles = emptyServerTiles.fill('').map((_, index) => {
    const sIndex = switchIndex(index)
    const serverState = gameState[ sIndex ]
    const serverTile = get(_, index, serverState)
    return serverTile
  })
  return serverTiles
}

export default servers
