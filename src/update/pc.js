/* global k */
import { Game } from 'mastermind-game'
import constants from '../constants'
import find from '../tilesets/maze/switches/find'
import store from '../store'
import updateWithSecret from '../state/updateWithSecret'
import response from './response' 
import servers from './servers'

const getGuessFromState = function (gameState) {
  const { m, l } = gameState
  const { b1, b3 } = constants

  const indices = find(m)
  const guess = indices
    .map((index) => m[ index ])
    .map((id) => {
      // Matching possible value of mastermind-game
      if (id === b1) { return 2 }
      if (id === b3) { return 1 }
      return ''
    })
  guess.reverse()
  return guess
}

const canGuess = function (resp) {
  const { correctPosition, correctNumber } = resp
  return correctPosition > 0 || correctNumber > 0
}

const levelUp = function (state, gm) {
  const newGameState = {
    ...state,
    gm: {
      ...gm,
      l: gm.l + 1,
      m: []
    }
  }
  const newState = updateWithSecret(newGameState)
  store.setState(newState)
}

const win = function () {
}

const pc = function () {
  const state = store.state()
  const { a } = constants
  const { gm, mm } = state
  const { l } = gm

  const g = new Game(mm)
  const guess = getGuessFromState(gm)
  const response = g.evaluateGuess(guess)
  servers(state, response)

  if (canGuess(response)) { k.assets.audio[ a ].play() }

  const { correctPosition } = response
  if (correctPosition === l) {
    if (l === 8) {
      win()
    } else {
      levelUp(state, gm)
    }
  }
}

export default pc
