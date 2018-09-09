import neighbors from '../neighbors'
import randomPick from '../randomPick'
import indexToXY from './indexToXY'
import isAllowedUnsetIndex from './isAllowedUnsetIndex'
import xyToIndex from './xyToIndex'

const getIndexByDirection = function (pos, direction) {
  let index
  switch (direction) {
    case 'toTop':
      index = xyToIndex(pos.x,     pos.y - 1)
      break
    case 'toRight':
      index = xyToIndex(pos.x + 1, pos.y)
      break
    case 'toBottom':
      index = xyToIndex(pos.x,     pos.y + 1) 
      break
    case 'toLeft':
      index = xyToIndex(pos.x - 1, pos.y)
      break
  }
  return index
}

const pickNextTile = function (possibleTiles, maze, index) {
  const numberOfTiles = possibleTiles.length
  let id

  if (numberOfTiles === 0) {
    throw new Error('No tiles to choose from!')
  }

  if (numberOfTiles === 1) {
    id = possibleTiles[ 0 ].id
  } else {
    // TODO: Pick the closest tile towards end
    // const tile = randomPick(possibleTiles)
    // id = tile.id
    id = possibleTiles[ 0 ].id
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
  if (isAbove && next.toBottom) { toCurrentInDirection = 'toBottom' }
  if (isRight && next.toLeft)   { toCurrentInDirection = 'toLeft' }
  if (isBelow && next.toTop)    { toCurrentInDirection = 'toTop' }
  if (isLeft  && next.toRight)  { toCurrentInDirection = 'toRight' }

  const allDirections = [ 'toTop', 'toRight', 'toBottom', 'toLeft' ]
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
