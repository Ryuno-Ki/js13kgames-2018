import constants from '../../constants'

/**
 * Checks whether the tile can be set at that index.
 *
 * @module tilesets/maze/isAllowedUnsetIndex
 * @exports isAllowedUnsetIndex
 * @requires constants
 */

/**
 * Looks up, whether the index is still in bound and not filled yet.
 *
 * @public
 * @function
 * @arg { Array<number> } maze - The maze of the game.
 * @arg { number } index       - The index to check.
 * @returns { boolean }        - The result whether the tile can be filled.
 */
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
