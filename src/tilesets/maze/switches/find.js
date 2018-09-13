import constants from '../../../constants'

/**
 * Find a list of switches with the maze.
 *
 * @module tilesets/maze/switches/find
 * @exports find
 * @requires constants
 */

/**
 * Look up all switch tiles within the maze and returns their indices.
 *
 * @public
 * @function
 * @arg { Array<number> } maze        - The 1D representation of the maze.
 * @returns { Array<number> } indices - A list of indices of the switch tiles.
 */
const find = function (maze) {
  const { b1, b2, b3 } = constants
  const switches = [ b1, b2, b3 ]

  const indices = maze
    .map((id, index) => {
      return {
        id,
        index
      }
    })
    .filter((pair) => switches.includes(pair.id))
    .map((pair) => pair.index)

  /*
   * Switches fill up from the right. Reverse the order thus.
   */
  indices.reverse()
  return indices
}

export default find
