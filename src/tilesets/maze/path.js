import constants from '../../constants'
import nextDirection from './nextDirection'
import nextTile from './nextTile'

const step = function (maze, current) {
  const direction = nextDirection(maze, current)
  const next = nextTile(maze, current, direction)
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
