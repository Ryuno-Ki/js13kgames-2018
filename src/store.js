import nation from 'nation'
import state from './state'

const key = 'an-offline-life'
const ls = window.localStorage
const savedState = JSON.parse(ls.getItem(key))

const store = nation({
  initial: () => {
    return savedState || state
  }
})

store.onChange((currentState) => {
  ls.setItem(key, JSON.stringify(currentState))
})

export default store
