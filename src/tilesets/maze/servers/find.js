import constants from '../../../constants'

/**
 * Find a list of servers with the maze.
 *
 * @module tilesets/maze/servers/find
 * @exports find
 * @requires constants
 */

/**
 * Look up all server tiles within the maze and returns their indices.
 *
 * @public
 * @function
 * @arg { Array<number> } maze        - The 1D representation of the maze.
 * @returns { Array<number> } indices - A list of indices of the server tiles.
 */
const find = function (maze) {
  const { s1, s2, s3 } = constants
  const servers = [ s1, s2, s3 ]

  const indices = maze
    .map((id, index) => {
      return {
        id,
        index
      }
    })
    .filter((pair) => servers.includes(pair.id))
    .map((pair) => pair.index)
  return indices
}

export default find
