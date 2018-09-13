import store from '../store'
import switchIndex from '../tilesets/maze/switches/switchIndex'

/**
 * Updates the state of the switches in the game sub-state.
 *
 * @module update/switches
 * @exports switches
 * @requires module:store
 * @requires module:tilesets/maze/switches/switchIndex
 */

/**
 * Toggles the state of the switches.
 *
 * @public
 * @function
 * @arg { object } object - The object from a pointer event handled by kontra.
 */
const switches = function (object) {
  const currentState = store.state()
  const bIndex = switchIndex(object.i)
  const buttonState = currentState.gm[ bIndex ]

  store.setState({
    ...currentState,
    gm: {
      ...currentState.gm,
      [bIndex]: !buttonState
    }
  })
}

export default switches
