import randomPick from '../randomPick'
/*
import nextDirection from './nextDirection'
import nextTile from './nextTile'
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
