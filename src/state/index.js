import game from './game'
import mastermind from './mastermind'
import updateWithSecret from './updateWithSecret'

/**
 * Describes the state of the whole application.
 *
 * @module state
 * @exports state
 * @requires module:state/game
 * @requires module:state/mastermind
 * @requires module:state/updateWithSecret
 */

/**
 * Assembles the different sub-states into one object with namespaces.
 * In this phase the mastermind sub-state will be updated with a secret,
 * which depends on the level property of the game sub-state.
 *
 * @type object
 * @property { string } gm - Namespace for the game sub-state.
 * @property { string } mm - Namespace for the mastermind sub-state.
 */
let state = {
  gm: game,
  mm: mastermind
}
state = updateWithSecret(state)

export default state
