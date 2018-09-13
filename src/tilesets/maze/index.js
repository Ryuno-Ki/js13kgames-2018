import constants from '../../constants'
import store from '../../store'
import fill from './fill'
import modem from './modem'
import path from './path'
import pc from './pc'
import servers from './servers'
import switches from './switches'
import xyToIndex from './xyToIndex'

/**
 * Goes more into detail on how to compute the maze.
 *
 * @module tilesets/maze
 * @exports maze
 * @requires constants
 * @requires module:store
 * @requires module:tilesets/maze/fill
 * @requires module:tilesets/maze/modem
 * @requires module:tilesets/maze/path
 * @requires module:tilesets/maze/pc
 * @requires module:tilesets/maze/servers
 * @requires module:tilesets/maze/switches
 * @requires module:tilesets/maze/xyToIndex
 */

/**
 * Returns an Array of objects describing position and ID of pre-determined
 * tiles.
 *
 * @private
 * @function
 * @returns { Array<object> } prefilledMaze - Array of pre-determined tiles.
 */
const getFixedTiles = function () {
  const withModem = modem()
  const withPc = pc()
  const withSwitch = switches()
  const withServer = servers()
  const prefilledMaze = [
    ...withModem,
    ...withPc,
    ...withSwitch,
    ...withServer
  ]
  return prefilledMaze
}

/**
 * Generates the maze by first looking at fixed tiles and then filling the
 * missing bits. Afterwards updating the game sub-state.
 *
 * @private
 * @function
 * @returns { Array<number> } generatedMaze - An 1D representation of the maze.
 */
const generateMaze = function () {
  const { r, c, u } = constants
  const emptyMaze = new Array(r * c)
  const generatedMaze = emptyMaze.fill(u)
  const maze = getFixedTiles()

  maze.forEach((entry) => {
    const { x, y, value } = entry
    const index = xyToIndex(x, y)
    generatedMaze[ index ] = value
  })

  path(generatedMaze)
  fill(generatedMaze)

  const state = store.state()
  store.setState({
    ...state,
    gm: {
      ...state.gm,
      m: generatedMaze
    }
  })
  return generatedMaze
}

/**
 * Computing a new maze if necessary (that is, not already in state).
 *
 * @public
 * @function
 * @returns { Array<number> } generatedMaze - The computed maze.
 */
const maze = function () {
  const mazeInState = store.state().gm.m
  if (mazeInState.length > 0) {
    return mazeInState
  }
  const generatedMaze = generateMaze()
  return generatedMaze
}

export default maze
