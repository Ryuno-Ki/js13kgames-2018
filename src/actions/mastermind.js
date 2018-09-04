import { GUESS } from './types'

function makeGuess (guess) {
  return {
    type: GUESS,
    value: guess
  }
}

export {
  makeGuess
}
