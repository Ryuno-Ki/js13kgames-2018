import { Game } from 'mastermind-game'

/**
 * The engine powering mastermind.
 * @external Game
 * @see {@link https://github.com/garbados/mastermind-game|mastermind-game}
 */

/**
 * Updates the mastermind sub-state with a secret.
 *
 * @module state/updateWithSecret
 * @exports updateWithSecret
 */

/**
 * Augments the whole application state with new properties.
 *
 * @public
 * @function
 * @arg { object } state     - The application state.
 * @returns { object } state - The updated state.
 */
const updateWithSecret = function (state) {
  const { gm, mm } = state
  const { l } = gm
  const game = new Game({
    numChoices: mm.numChoices,
    secretLength: l
  })

  return {
    ...state,
    mm: {
      ...mm,
      secretLength: l,
      secret: game.secret
    }
  }
}

export default updateWithSecret
