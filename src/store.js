import { createStore } from 'redux'
import { mastermindReducer } from './reducers/mastermind'

const store = createStore(mastermindReducer)
store.subscribe(() => {
  console.log('Received state update:', store.getState())
})
store.dispatch({ type: 'INITIAL' })
window.store = store

export {
  store
}
