import constants from '../../constants'

const isAllowedUnsetIndex = function (maze, index) {
  const { r, c, u, s1, s2, s3 } = constants
  const lowerLimit = 0
  const upperLimit = r * c

  const unsetTiles = [ u, s1, s2, s3 ]
  const id = maze[ index ]

  const isWithinLimits = index >= lowerLimit && index < upperLimit
  const isNotSetYet = unsetTiles.includes(id)
  return isWithinLimits && isNotSetYet
}

export default isAllowedUnsetIndex
