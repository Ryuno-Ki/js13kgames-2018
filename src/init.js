import { Game } from 'mastermind-game'

// Initialises the game
const startGame = function () {
  const gameOptions = {
  }

  const game = new Game(gameOptions)
  return game
}

const generateSecret = function (game) {
  const NUM_CHOICES = 2
  // TODO: Should be dynamic depending on level
  const SECRET_LENGTH = 4

  const secret = game.makeSecret(NUM_CHOICES, SECRET_LENGTH)
  return secret
}

const getInitialState = function (secret) {
  const state = {
    secret
  }
  return state
}

const appendCanvas = function () {
  const firstChild = document.body.firstChild
  const canvas = document.createElement('canvas')
  canvas.setAttribute('id', 'game')
  document.body.insertBefore(canvas, firstChild)
}

const game = startGame()
const secret = generateSecret(game)
const state = getInitialState(secret)

export {
  appendCanvas,
  game,
  state
}
