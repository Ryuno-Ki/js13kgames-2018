import neighbors from '../neighbors'
import randomPick from '../randomPick'
import indexToXY from './indexToXY'
import isAllowedUnsetIndex from './isAllowedUnsetIndex'
import xyToIndex from './xyToIndex'

/**
 * Determine the next tile in a path.
 *
 * @module tilesets/maze/nextTile
 * @exports nextTile
 * @requires module:tilesets/neighbors
 * @requires module:tilesets/randomPick
 * @requires module:tilesets/maze/indexToXY
 * @requires module:tilesets/maze/isAllowedUnsetIndex
 * @requires module:tilesets/maze/xyToIndex
 */

/**
 * Look up the index for the given position and direction.
 *
 * @private
 * @function
 * @arg { object } pos       - Current position of a tile.
 * @arg { number } pos.x     - Position along the columns.
 * @arg { number } pos.y     - Position along the rows.
 * @arg { string } direction - String indicating the direction.
 * @returns { number } index - The index of the tile in that direction.
 */
const getIndexByDirection = function (pos, direction) {
  let index
  if (direction === 't') {
    index = xyToIndex(pos.x,     pos.y - 1)
  } else if (direction === 'r') {
    index = xyToIndex(pos.x + 1, pos.y)
  } else if (direction === 'b') {
    index = xyToIndex(pos.x,     pos.y + 1) 
  } else if (direction === 'l') {
    index = xyToIndex(pos.x - 1, pos.y)
  }
  return index
}

/**
 * Looks up the neighbor with the given characteristics.
 *
 * @private
 * @function
 * @arg { object } characteristics    - Some characteristics of a tile.
 * @arg { number } characteristics.id - The id of a tile.
 * @returns { number }                - The id of that tile.
 */
const findNeighbor = function (characteristics) {
  return characteristics.id
}

/**
 * Actually selects a tile of the given possible ones.
 * Updates the maze in place (but not the state).
 *
 * @private
 * @function
 * @arg { Array<number> } possibleTiles - Candidates for the next tile.
 * @arg { Array<number> } maze          - 1D representation of the maze.
 * @arg { number } index                - The index of the next tile.
 * @returns { object } tile             - The next tile.
 * @returns { number } tile.index       - The index of the next tile.
 * @returns { number } tile.id          - The id of the next tile.
 * @todo Apply a proper strategy.
 */
const pickNextTile = function (possibleTiles, maze, index) {
  const numberOfTiles = possibleTiles.length
  let id

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

/**
 * Looks around the current tile and picks the best fit for the next tile.
 *
 * @public
 * @function
 * @arg { Array<number> } maze        - The 1D representation of the maze.
 * @arg { object } current            - The current tile.
 * @arg { number } current.index      - Position of current tile within maze.
 * @arg { number } current.id         - ID of the current tile within the maze.
 * @returns { object } nextTile       - The next tile.
 * @returns { number } nextTile.index - The position within maze of next tile.
 * @returns { number } nextTile.id    - The ID of the next tile.
 */
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

  /*
   * What is the relationship between the both tiles?
   * Would they be able to connect?
   */
  let toCurrentInDirection = ''
  if (isAbove && next.b) { toCurrentInDirection = 'b' }
  if (isRight && next.l) { toCurrentInDirection = 'l' }
  if (isBelow && next.t) { toCurrentInDirection = 't' }
  if (isLeft  && next.r) { toCurrentInDirection = 'r' }

  /*
   * Don't consider the direction we were coming from.
   */
  const allDirections = [ 't', 'r', 'b', 'l' ]
  const otherDirections = allDirections
    .filter((direction) => direction !== toCurrentInDirection)

  /*
   * Instead consider only tiles, we would be able to connect to.
   * Therefore, first look at the next tile resp. the tiles around it.
   * Check, whether they are already set or available to be filled.
   * Check, whether they are within the bounds, too.
   */
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
