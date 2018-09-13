import constants from '../../constants'
import nextDirection from './nextDirection'
import nextTile from './nextTile'

/**
 * Build the path from the modem to the server.
 *
 * @module tilesets/maze/path
 * @exports path
 * @requires constants
 * @requires module:tilesets/maze/nextDirection
 * @requires module:tilesets/maze/nextTile
 */

/**
 * Go one step towards the server.
 *
 * @private
 * @function
 * @arg { Array<number> } maze - The 1D representation of the maze.
 * @arg { object } current     - The current tile.
 * @returns { object } next    - The next tile.
 */
const step = function (maze, current) {
  const direction = nextDirection(maze, current)
  const next = nextTile(maze, current, direction)
  return next
}

/**
 * Given a maze, find a path towards it.
 *
 * @public
 * @function
 * @arg { Array<number> } maze - The 1D representation of the maze.
 * @todo Consider multiple servers (backtracking the path? Splitting?)
 * @todo Implement move towards mid-goals (splitters)
 */
const path = function (maze) {
  const { m } = constants
  const index = maze.findIndex((id) => id === m)

  /*
   * Start from the modem tile, which has a fixed position.
   */
  let current = {
    index,
    id: m
  }

  /*
   * It is fixed, that in the first position, there will be a server.
   */
  while (current.index != 1) {
    current = step(maze, current)
  }
}

export default path
