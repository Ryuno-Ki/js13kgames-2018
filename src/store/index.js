/* global ls */
import nation from 'nation'
import state from '../state'
import servers from './servers'
import switches from './switches'

const key = 'aol'
const ls = window.localStorage
const savedState = JSON.parse(ls.getItem(key))

/**
 * A small state-management library
 * 
 * @external nation
 * @see {@link https://www.npmjs.com/package/nation|nation}
 */

/**
 * An instance of nation exposing methods to read and write a store.
 *
 * @module store
 * @exports store
 * @requires external:nation
 * @requires module:state
 * @requires module:store/servers
 * @requires module:store/switches
 */

/**
 * Creates the application store instance.
 *
 * @public
 * @type object
 */
const store = nation({
  initial: () => {
    return savedState || state
  }
})

/**
 * This is kind of a hack, but I don't want to register a listener on every
 * tick, but in one place.
 * 
 * @private
 * @function
 * @arg { object } currentState - The current state
 */
const updateTiles = function (currentState) {
  switches(currentState)
  servers(currentState)
}

store.onChange((currentState) => {
  updateTiles(currentState)
  ls.setItem(key, JSON.stringify(currentState))
})

export default store
