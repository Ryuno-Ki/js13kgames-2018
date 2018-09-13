import store from '../../../store'
import get from './get'
import switchIndex from './switchIndex'

/**
 * Get a list of switch tiles with the correct ID.
 *
 * @module tilesets/maze/switches
 * @exports switches
 * @requires module:store
 * @requires module:tilesets/maze/switches/get
 * @requires module:tilesets/maze/switches/switchIndex
 */

/**
 * Look up the application state to compute the correct visual.
 *
 * @public
 * @function
 * @returns { Array<object> } switchTiles -  List of switch tiles.
 */
const switches = function () {
  const gameState = store.state().gm
  const { l } = gameState

  const emptySwitches = new Array(l)
  const switchTiles = emptySwitches.fill('').map((_, index) => {
    const buttonIndex = switchIndex(index)
    const buttonState = gameState[ buttonIndex ]
    const switchTile = get(_, index, buttonState)
    return switchTile
  })
  return switchTiles
}

export default switches
