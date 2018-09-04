import { initialState } from '../state/ui'

function ui (state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    default:
      return {
        ...state
    }
  }
}

export {
  ui
}
