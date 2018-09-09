import nextDirection from './nextDirection'
import nextTile from './nextTile'

const step = function (maze, current) {
  const direction = nextDirection(maze, current)
  const next = nextTile(maze, current, direction)
  return next
}

const path = function (maze) {
  const startTile = 16  // modem
  const startIndex = maze.findIndex((entry) => entry === startTile)
  // Not sure, what to do with those
  // const endTile = 11  // server
  // const endIndex = maze.findIndex((entry) => entry === endTile)

  let current = {
    index: startIndex,
    id: startTile
  }

  while (current.index != 1) {
    current = step(maze, current)
  }
}

export default path
