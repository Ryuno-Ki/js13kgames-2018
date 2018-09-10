import { Game } from 'mastermind-game'

const mastermind = {
  p: null,  // correctPosition
  n: null,  // correctNumber
  ng: Game.NUM_GUESSES,  // number of guesses, doesn't matter to us
  s: null,  // secret
  sl: Game.SECRET_LENGTH,  // secretLength, should depend on level
  u: 2  // upperInteger, because binary and indexed by 1
}

export default mastermind
