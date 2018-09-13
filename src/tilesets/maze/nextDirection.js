import neighbors from '../neighbors'
import randomPick from '../randomPick'
import indexToXY from './indexToXY'
import isAllowedUnsetIndex from './isAllowedUnsetIndex'
import xyToIndex from './xyToIndex'

/**
 * Determines the best next direction.
 *
 * @module tilesets/maze/nextDirection
 * @exports nextDirection
 * @requires tilesets/neighbors
 * @requires module:tilesets/randomPick
 * @requires module:tilesets/maze/indexToXY
 * @requires module:tilesets/maze/isAllowedUnsetIndex
 * @requires module:tilesets/maze/xyToIndex
 */

/**
 * Given a list of possible directions, pick the best one.
 *
 * @private
 * @function
 * @arg { Array<number> } possibleDirections - Array of indices for next tile.
 * @arg { object } options                   - Additional info for next tile.
 * @returns { object }                       - New index + additional info.
 */
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

/** Determines the next direction by looking at possible directions and filled
 * state of the maze.
 *
 * @public
 * @function
 * @arg { Array<number> } maze - The 1D representation of the maze.
 * @arg { object } current     - The current tile.
 * @returns { object }         - The index of the next tile + additional info.
 */
const nextDirection = function (maze, current) {
  const currentIndex = current.index
  const currentId = current.id
  const { x, y } = indexToXY(currentIndex)

  /*
   * Look up possible connections around the current tile.
   */
  const connections = neighbors.find((neighbor) => neighbor.id === currentId)
  const { t, r, b, l } = connections

  /*
   * Compute index of the next tile candidates.
   */
  const allDirections = []
  if (t) { allDirections.push(xyToIndex(x,     y - 1)) }
  if (r) { allDirections.push(xyToIndex(x + 1, y    )) }
  if (b) { allDirections.push(xyToIndex(x,     y + 1)) }
  if (l) { allDirections.push(xyToIndex(x - 1, y    )) }

  /*
   * Sort tiles out, with which we can't connect anyway.
   */
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
