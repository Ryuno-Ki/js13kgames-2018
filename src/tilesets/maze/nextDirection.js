import neighbors from '../neighbors'
import randomPick from '../randomPick'
import indexToXY from './indexToXY'
import isAllowedUnsetIndex from './isAllowedUnsetIndex'
import xyToIndex from './xyToIndex'

const pickNextDirection = function (possibleDirections, options) {
  const numberOfDirections = possibleDirections.length
  const moreData = options || {}
  let index

  if (numberOfDirections === 0) {
    throw new Error('No directions to choose from!')
  }

  if (numberOfDirections === 1) {
    index = possibleDirections[ 0 ]
  } else {
    // TODO: Pick the closest direction towards end
    // index = randomPick(possibleDirections)
    index = possibleDirections[ 0 ]
  }

  return {
    index,
    ...moreData
  }
}

const nextDirection = function (maze, current) {
  const currentIndex = current.index
  const currentId = current.id
  const { x, y } = indexToXY(currentIndex)

  const connections = neighbors.find((neighbor) => neighbor.id === currentId)
  const { toTop, toRight, toBottom, toLeft } = connections

  const allDirections = []
  if (toTop)    { allDirections.push(xyToIndex(x,     y - 1)) }
  if (toRight)  { allDirections.push(xyToIndex(x + 1, y    )) }
  if (toBottom) { allDirections.push(xyToIndex(x,     y + 1)) }
  if (toLeft)   { allDirections.push(xyToIndex(x - 1, y    )) }

  const possibleDirections = allDirections
    .filter((index) => isAllowedUnsetIndex(maze, index))

  return pickNextDirection(possibleDirections, {
    toTop: toTop && toBottom ? true : !toTop,
    toRight: toLeft && toRight ? true : !toRight,
    toBottom: toTop && toBottom ? true : !toBottom,
    toLeft: toLeft && toRight ? true : !toLeft
  })
}

export default nextDirection
