import store from '../../../store'
import switchIndex from '../switches/switchIndex'
import get from './get'

const servers = function () {
  const gameState = store.state().gm
  const { l } = gameState

  const emptyServerTiles = new Array(l)
  const serverTiles = emptyServerTiles.fill('').map((_, index) => {
    const sIndex = switchIndex(index)
    const serverState = gameState[ sIndex ]
    const serverTile = get(_, index, serverState)
    return serverTile
  })
  return serverTiles
}

export default servers
