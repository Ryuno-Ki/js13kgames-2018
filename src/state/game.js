/**
 * Describes the sub-state for the game-related properties
 *
 * @module state/game
 * @exports game
 */

/**
 * The game sub-state object.
 * Some properties will be added during the game.
 * 
 * @type object
 * @property { number } l        - The current level.
 * @property { Array<number> } m - The maze, that is the 1D layer.
 * @property { boolean } w       - The flag indicating winning state.
 */
const game = {
  l: 1,
  m: [],
  w: false
}

export default game
