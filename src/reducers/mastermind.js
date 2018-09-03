import { Game } from 'mastermind-game'
import { GUESS } from '../actions/mastermind'
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

function mastermindReducer (state, action) {
  if (!state) {
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
  mastermindReducer
}
