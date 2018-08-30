import { Game } from 'mastermind-game'
import * as switchImage from './assets/Switch.png'

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

const drawInitialWorld = function () {
  const IMAGE_WIDTH = 882
  const IMAGE_HEIGHT = 644
  const image = new Image(IMAGE_WIDTH, IMAGE_HEIGHT)

  const d = document
  const el = d.getElementById('game')
  const canvas = d.createElement('canvas')
  canvas.width = IMAGE_WIDTH
  canvas.height = IMAGE_HEIGHT
  const context = canvas.getContext('2d')

  image.onload = function () {
    context.drawImage(this, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT)
  }

  image.src = switchImage.default

  console.log('Switch image', switchImage.default, image)
  console.log('Appending canvas', el, canvas)
  el.appendChild(canvas)
}

const game = startGame()
const secret = generateSecret(game)
const state = getInitialState(secret)
drawInitialWorld()

export {
  game,
  state
}
