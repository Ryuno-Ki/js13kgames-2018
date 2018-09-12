/* global ls */
import nation from 'nation'
import state from '../state'
import servers from './servers'
import switches from './switches'

const key = 'aol'
const ls = window.localStorage
const savedState = JSON.parse(ls.getItem(key))

const store = nation({
  initial: () => {
    return savedState || state
  }
})

/**
 * This is kind of a hack, but I don't want to register a listener on every
 * tick, but in one place.
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
