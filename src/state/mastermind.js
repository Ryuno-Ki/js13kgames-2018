import { Game } from 'mastermind-game'

/**
 * Describes the sub-state as needed for the mastermind game.
 *
 * @module state/mastermind
 * @exports mastermind
 * @requires external:Game
 */

/**
 * The sub-state holding properties important to the mastermind-engine.
 * It will be updated in a later phase of its life.
 *
 * @type object
 * @property { number } numChoices - Upper limit of integers for the secret.
 */
const mastermind = {
  numChoices: 2
}

export default mastermind
