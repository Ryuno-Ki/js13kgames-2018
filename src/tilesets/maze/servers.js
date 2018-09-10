import constants from '../../constants'
import store from '../../store'

const servers = function () {
  const level = store.state().game.l
  const { r, c, s3 } = constants

  const emptyServerTiles = new Array(level)
  const serverTiles = emptyServerTiles.fill(null).map((s, index) => {
    const serverTile = {
      x: 1,
      y: 1 + index,
      value: s3
    }
    return serverTile
  })
  return serverTiles
}

export default servers
