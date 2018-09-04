import { Game } from 'mastermind-game'
import { GUESS } from '../actions/types'
import { initialState } from '../state/mastermind'

function generateSecret () {
  const game = new Game(initialState)
  const { upperInteger, secretLength } = initialState
  return game.makeSecret(upperInteger, secretLength)
}

function guess (state, guessedValue) {
  const game = new Game(state)
  return game.evaluateGuess(guessedValue)
}

function mastermind (state, action) {
  if (typeof state === 'undefined') {
    return {
      ...initialState,
      secret: generateSecret()
    }
  }

  switch (action.type) {
    case GUESS:
      const { correctPosition, correctNumber } =  guess(state, action.value)
      return {
        ...state,
        correctPosition,
        correctNumber
      }
    default:
      return {
        ...state
      }
  }
}

export {
  mastermind
}
