import game from './game'
import mastermind from './mastermind'
import updateWithSecret from './updateWithSecret'

let state = {
  gm: game,
  mm: mastermind
}
state = updateWithSecret(state)

export default state
