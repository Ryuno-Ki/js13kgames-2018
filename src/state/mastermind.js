import { Game } from 'mastermind-game'

const mastermind = {
  correctPosition: null,
  correctNumber: null,
  numberOfGuesses: Game.NUM_GUESSES,
  secret: null,
  secretLength: Game.SECRET_LENGTH,  // should depend on level
  upperInteger: 2  // because binary
}

export default mastermind
