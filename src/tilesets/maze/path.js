import constants from '../../constants'
import nextDirection from './nextDirection'
import nextTile from './nextTile'

const step = function (maze, current) {
  const direction = nextDirection(maze, current)
  console.log('Next direction in path', direction)
  const next = nextTile(maze, current, direction)
  console.log('Next tile in path', next)
  return next
}

const path = function (maze) {
  const { m } = constants
  const index = maze.findIndex((id) => id === m)

  let current = {
    index,
    id: m
  }

  while (current.index != 1) {
    current = step(maze, current)
  }
}

export default path
