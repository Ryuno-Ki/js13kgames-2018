import randomPick from '../randomPick'
/*
import nextDirection from './nextDirection'
import nextTile from './nextTile'
*/

/**
 * Filling the next tile with an id.
 *
 * @module tilesets/maze/fill
 * @exports fill
 * @requires module:tilesets/randomPick
 */

/**
 * If the tile was not determined yet, pick a good one.
 * Update the maze in-place.
 *
 * @public
 * @function
 * @arg { Array<number> } maze - The current maze.
 * @todo Find a strategy, which keeps in mind the target tile.
 */
const fill = function (maze) {
  maze.forEach((id, index) => {
    if (id === 0) {
      /* FIXME: Find a good algorithm for this!
      const current = { id, index }
      const direction = nextDirection(maze, current)
      console.log('Direction', direction)
      nextTile(maze, current, direction)
      */
     const value = randomPick([1, 2, 3, 4, 5, 6, 7, 8])
     maze[ index ] = value
    }
  })
}

export default fill
