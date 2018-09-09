/* global kontra */
import maze from './maze'
import sizes from './sizes'

const ground = function (tileEngine) {
  const level = 1  // TODO: Read from store

  tileEngine.addTilesets({
    image: 'tileset',
  })
  tileEngine.addLayers({
    name: 'ground',
    zIndex: level * 10,
    data: maze()
  })
}

const tilesets = function () {
  const { rows, cols } = sizes
  const tileEngine = kontra.tileEngine({
    tileHeight: 32,
    tileWidth: 32,
    height: rows,
    width: cols
  })
  ground(tileEngine)
  return tileEngine
}

export default tilesets
