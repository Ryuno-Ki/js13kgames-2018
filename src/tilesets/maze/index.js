import constants from '../../constants'
import modem from './modem'
import path from './path'
import pc from './pc'
import servers from './servers'
import switches from './switches'
import xyToIndex from './xyToIndex'

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
  return generatedMaze
}

const maze = function () {
  const generatedMaze = generateMaze()
  return generatedMaze
}

export default maze
