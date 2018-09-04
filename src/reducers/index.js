import { combineReducers } from 'redux'
import { mastermind } from './mastermind'
import { ui } from './ui'

const reducer = combineReducers({ mastermind, ui })

export {
  reducer
}
