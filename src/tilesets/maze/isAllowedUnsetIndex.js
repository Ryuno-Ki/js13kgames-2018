import sizes from '../sizes'

const isAllowedUnsetIndex = function (maze, index) {
  const { rows, cols } = sizes
  const lowerLimit = 0
  const upperLimit = rows * cols

  const unsetTiles = [ 0, 9, 10, 11 ]
  const id = maze[ index ]

  const isWithinLimits = index >= lowerLimit && index < upperLimit
  const isNotSetYet = unsetTiles.includes(id)
  return isWithinLimits && isNotSetYet
}

export default isAllowedUnsetIndex
