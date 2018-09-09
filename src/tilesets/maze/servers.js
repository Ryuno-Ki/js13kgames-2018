import sizes from '../sizes'

const servers = function () {
  const level = 1  // TODO: Read from store
  const { rows, cols } = sizes
  const serverValue = 11

  const emptyServerTiles = new Array(level)
  const serverTiles = emptyServerTiles.fill(null).map((s, index) => {
    const serverTile = {
      x: 1,
      y: 1 + index,
      value: serverValue
    }
    return serverTile
  })
  return serverTiles
}

export default servers
