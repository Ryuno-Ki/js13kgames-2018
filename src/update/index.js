/* global k */
import pc from './pc'
import switches from './switches'

/**
 * Updates the state on every frame.
 * Limited to click event to improve performance.
 *
 * @module update
 * @exports update
 * @requires module:update/pc
 * @requires module:update/switches
 */

/**
 * Delegates updates to other methods.
 * @public
 * @function
 */
const update = function () {
  k.pointer.onDown((event, object) => {
    if (event.type === 'mousedown' && object) {
      const { type } = object
      if (type === 'p') { pc() } else { switches(object) }
    }
  })
}

export default update
