const GUESS = 'GUESS'

function makeGuess (guess) {
  return {
    type: GUESS,
    value: guess
  }
}

export {
  GUESS,
  makeGuess
}
