import find from '../tilesets/maze/switches/find'
import get from '../tilesets/maze/switches/get'
import switchIndex from '../tilesets/maze/switches/switchIndex'

/**
 * Updates the maze in the game sub-state with information regarding switches.
 *
 * @module store/switches
 * @exports switches
 * @requires module:tilesets/maze/switches/find
 * @requires module:tilesets/maze/switches/get
 * @requires module:tilesets/maze/switches/switchIndex
 */

/**
 * Updates the switches part of the game sub-state.
 *
 * @public
 * @function
 * @arg { object } currentState - The current application state.
 */
const switches = function (currentState) {
  const gameState = currentState.gm
  const { m, l } = gameState

  /*
   * Gets the indices of all switches within maze.
   * Then look up its new value from the state and update the state in-place.
   */
  const switchIndices = find(m)
  switchIndices.forEach((index, i) => {
    const buttonIndex = switchIndex(i)
    const buttonState = gameState[ buttonIndex ]

    const switchTile = get('', i, buttonState)
    m[ index ] = switchTile.value
  })
}

export default switches
