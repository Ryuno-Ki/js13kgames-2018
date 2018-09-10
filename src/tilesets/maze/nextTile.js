import neighbors from '../neighbors'
import randomPick from '../randomPick'
import indexToXY from './indexToXY'
import isAllowedUnsetIndex from './isAllowedUnsetIndex'
import xyToIndex from './xyToIndex'

const getIndexByDirection = function (pos, direction) {
  let index
  switch (direction) {
    case 't':
      index = xyToIndex(pos.x,     pos.y - 1)
      break
    case 'r':
      index = xyToIndex(pos.x + 1, pos.y)
      break
    case 'b':
      index = xyToIndex(pos.x,     pos.y + 1) 
      break
    case 'l':
      index = xyToIndex(pos.x - 1, pos.y)
      break
  }
  return index
}

const findNeighbor = function (characteristics) {
  return characteristics.id
}

const pickNextTile = function (possibleTiles, maze, index) {
  const numberOfTiles = possibleTiles.length
  let id

  if (numberOfTiles === 0) {
    throw new Error('No tiles to choose from!')
  }

  if (numberOfTiles === 1) {
    id = findNeighbor(possibleTiles[ 0 ])
  } else {
    // TODO: Pick the closest tile towards end
    // const tile = randomPick(possibleTiles)
    id = findNeighbor(possibleTiles[ 0 ])
  }

  maze[ index ] = id
  return {
    index,
    id
  }
}

const nextTile = function (maze, current, next) {
  const currentIndex = current.index
  const currentId = current.id
  const currentXY = indexToXY(currentIndex)

  const nextIndex = next.index
  const nextXY = indexToXY(nextIndex)

  const rowDistance = nextXY.y - currentXY.y
  const colDistance = nextXY.x - currentXY.x

  const isAbove = rowDistance === -1
  const isRight = colDistance === 1
  const isBelow = rowDistance === 1
  const isLeft  = colDistance === -1

  let toCurrentInDirection = ''
  if (isAbove && next.b) { toCurrentInDirection = 'b' }
  if (isRight && next.l) { toCurrentInDirection = 'l' }
  if (isBelow && next.t) { toCurrentInDirection = 't' }
  if (isLeft  && next.r) { toCurrentInDirection = 'r' }

  const allDirections = [ 't', 'r', 'b', 'l' ]
  const otherDirections = allDirections
    .filter((direction) => direction !== toCurrentInDirection)

  const possibleTiles = neighbors
    .filter((neighbor) => neighbor[ toCurrentInDirection ])
    .filter((neighbor) => {
      const possibleDirections = otherDirections
        .filter((direction) => neighbor[ direction ])
      return possibleDirections.length > 0
    })
    .filter((neighbor) => {
      const unsetTiles = otherDirections
        .filter((direction) => neighbor[ direction ])
        .map((direction) => getIndexByDirection(nextXY, direction))
        .filter((index) => isAllowedUnsetIndex(maze, index))
      return unsetTiles.length > 0
    })

  return pickNextTile(possibleTiles, maze, nextIndex)
}

export default nextTile
