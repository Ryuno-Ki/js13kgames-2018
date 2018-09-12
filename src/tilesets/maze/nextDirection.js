import neighbors from '../neighbors'
import randomPick from '../randomPick'
import indexToXY from './indexToXY'
import isAllowedUnsetIndex from './isAllowedUnsetIndex'
import xyToIndex from './xyToIndex'

const pickNextDirection = function (possibleDirections, options) {
  const numberOfDirections = possibleDirections.length
  const moreData = options || {}
  let index

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
  const { t, r, b, l } = connections

  const allDirections = []
  if (t) { allDirections.push(xyToIndex(x,     y - 1)) }
  if (r) { allDirections.push(xyToIndex(x + 1, y    )) }
  if (b) { allDirections.push(xyToIndex(x,     y + 1)) }
  if (l) { allDirections.push(xyToIndex(x - 1, y    )) }

  const possibleDirections = allDirections
    .filter((index) => isAllowedUnsetIndex(maze, index))

  return pickNextDirection(possibleDirections, {
    t: t && b ? true : !t,
    r: l && r ? true : !r,
    b: t && b ? true : !b,
    l: l && r ? true : !l
  })
}

export default nextDirection
