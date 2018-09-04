import { store } from './store'

const update = function (dt) {
  store.dispatch({ type: 'TICK' })
}

export {
  update
}
