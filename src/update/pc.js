/* global k */
import { Game } from 'mastermind-game'
import constants from '../constants'
import find from '../tilesets/maze/switches/find'
import store from '../store'
import updateWithSecret from '../state/updateWithSecret'
import response from './response' 
import servers from './servers'

/**
 * Updates the state of the computers on every frame.
 *
 * @module update/pc
 * @exports pc
 * @requires external:Game
 * @requires constants
 * @requires module:tilesets/maze/switches/find
 * @requires module:store
 * @requires module:state/updateWithSecret
 * @requires module:update/response
 * @requires module:update/servers
 */

/**
 * Looks up in the state, whether all prerequisites are met.
 * This implies a mapping between the position of the switches and a guess
 * as used in the mastermind game engine.
 *
 * @private
 * @function
 * @arg { object } gameState        - The game sub-state of the application.
 * @returns { Array<number> } guess - The guess as needed for mastermind.
 */
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

/**
 * Abstracts away the logic behind when to be able to use the modem.
 *
 * @private
 * @function
 * @arg { object } resp - A response object from mastermind.
 * @returns { boolean } - Whether the user is able to use the modem.
 */
const canGuess = function (resp) {
  const { correctPosition, correctNumber } = resp
  return correctPosition > 0 || correctNumber > 0
}

/**
 * Updates the state on level up.
 * That is, increasing the level property of the game sub-state and clearing
 * the maze property, thus forcing a redraw of the game.
 *
 * @private
 * @function
 * @arg { object } state - The whole application state.
 * @arg { object } gm    - The game sub-state of the application.
 */
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

/**
 * Indicates the end to the user.
 * Note, that you can access HTML elements with an id directly via the window
 * object.
 * See {@link http://2ality.com/2012/08/ids-are-global.html|DOM: element IDs are global variables}
 *
 * @private
 * @function
 */
const win = function () {
  window.on.className = 'back'
}

/**
 * Looks up the state in order to evaluate a guess towards mastermind.
 * If successful, the user will level up until she finishes.
 *
 * @public
 * @function
 */
const pc = function () {
  const state = store.state()
  const { a } = constants
  const { gm, mm } = state
  const { l } = gm

  const g = new Game(mm)
  const guess = getGuessFromState(gm)
  const response = g.evaluateGuess(guess)
  servers(state, response)

  /*
   * Yay, Audio \o/
   */
  if (canGuess(response)) { k.assets.audio[ a ].play() }

  /*
   * When enough tiles are in the correct order and position, the user has
   * guessed correct.
   * Given the amount of spaces, 7 is a magic number.
   * Larger, and the server would cross with the switches.
   * The maze gets mapped to 0 to blank out.
   * Clearing it would case another repaint by kontra.
   */
  const { correctPosition } = response
  if (correctPosition === l) {
    if (l === 7) {
      store.setState({
        ...state,
        gm: {
          ...gm,
          m: gm.m.map(() => 0)
        }
      })

      win()
    } else {
      levelUp(state, gm)
    }
  }
}

export default pc
