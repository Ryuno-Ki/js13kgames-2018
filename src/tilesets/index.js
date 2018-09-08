/* global kontra */
import generate from 'maze'
import neighborsByType from './neighbors'

const { abs, floor, random } = Math
const numberOfTilesInRow = 10
const numberOfTilesInCol = 10

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 * @private
 */
const getRandomInt = function (min, max) {
  return floor(random() * (max - min + 1)) + min
}

/**
 * Builds up the grid used for the computation of the maze
 * @private
 */
const computeGrid = function () {
  const lengthOfGrid = numberOfTilesInRow * numberOfTilesInCol
  const emptyGrid = new Array(lengthOfGrid)
  const grid = emptyGrid.fill(0).map((cell, index) => {
    const x = index % numberOfTilesInRow
    const y = (index - x) / numberOfTilesInRow
    const numberOfTileTypes = 16
    const value = getRandomInt(1, numberOfTileTypes)
    return {
      x,
      y,
      value
    }
  })
  return grid
}

/**
 * Determine, whether two cells are next to each other
 * @private
 */
const adjacent = function (first, second) {
  const fx = first.x
  const fy = first.y
  const fv = first.value + 1  // Values are indexed by 1
  const sx = second.x
  const sy = second.y
  const sv = second.value + 1  // Values are indexed by 1
  console.log('Position', fx, fy, sx, sy)

  const rowDistance = sx - fx
  const colDistance = sy - fy
  const sameRow = rowDistance === 0
  const sameCol = colDistance === 0
  console.log('Shared row or column', sameRow, sameCol)

  const isAbove = sameRow && colDistance === 1
  const isBelow = sameRow && colDistance === -1
  const isRight = sameCol && rowDistance === 1
  const isLeft  = sameCol && rowDistance === -1
  const allowedNeighbors = neighborsByType[ sv ]
  console.log('Adjacent', isAbove, isBelow, isRight, isLeft)
  console.log('Neighbors', allowedNeighbors)

  if (isAbove) {
    return allowedNeighbors[ 't' ].includes(fv)
  } else if (isRight) {
    return allowedNeighbors[ 'r' ].includes(fv)
  } else if (isBelow) {
    return allowedNeighbors[ 'b' ].includes(fv)
  } else if (isLeft) {
    return allowedNeighbors[ 'l' ].includes(fv)
  }
  return false
}

/**
 * Pick an element from array
 * @private
 */
const choose = function (array) {
  return array[ floor(random() * array.length) ]
}

/**
 * Transforms the computed maze to a structure for kontra
 * @private
 */
const transformMapToArray = function (mazeMap) {
  const mazeNestedArray = Array.from(mazeMap)
  const mazeArray = mazeNestedArray.map((cell) => {
    const [ node, neighbors ] = cell
    return node.value
  })
  return mazeArray
}

const getLayerData = function () {
  const nodes = computeGrid()
  const mazeMap = generate(nodes, adjacent, choose)
  const data = transformMapToArray(mazeMap)
  return data
}

const ground = function (tileEngine) {
  const level = 1  // TODO: Read from store

  tileEngine.addTilesets({
    image: 'tileset',
  })
  tileEngine.addLayers({
    name: 'ground',
    zIndex: level * 10,
    data: getLayerData()
  })
}

const tilesets = function () {
  const tileEngine = kontra.tileEngine({
    tileHeight: 32,
    tileWidth: 32,
    height: numberOfTilesInCol,
    width: numberOfTilesInRow
  })
  ground(tileEngine)
  return tileEngine
}

export default tilesets
