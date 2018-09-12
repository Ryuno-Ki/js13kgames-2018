import find from '../tilesets/maze/servers/find'
import get from '../tilesets/maze/servers/get'
import serverIndex from '../tilesets/maze/servers/serverIndex'

const servers = function (currentState) {
  const gameState = currentState.gm
  const { m, l } = gameState
  const serverIndices = find(m)
  serverIndices.forEach((index, i) => {
    const sIndex = serverIndex(i)
    const serverState = gameState[ sIndex ]

    const serverTile = get('', i, serverState)
    m[ index ] = serverTile.value
  })
}

export default servers
