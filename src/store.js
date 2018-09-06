import nation from 'nation'
import state from './state'

const store = nation({
  initial: () => {
    return state
  }
})

export default store
