/* global kontra */
const ground = function (tileEngine) {
  tileEngine.addTilesets({
    image: 'tileset',
  })
  tileEngine.addLayers({
    name: 'ground',
    data: [
      0, 0, 0, 0, 0,  0,  0,  0, 0, 0,
      0, 0, 0, 0, 0,  0,  0,  0, 0, 0,
      7, 4, 1, 0, 0,  0,  0,  0, 0, 0,
      7, 4, 5, 0, 0,  0,  0,  0, 0, 0,
      7, 4, 5, 0, 0,  0,  0,  0, 0, 0,
      7, 4, 5, 0, 0,  0,  0,  0, 0, 0,
      0, 0, 6, 4, 1,  0,  0,  0, 0, 0,
      0, 0, 0, 0, 6,  1,  0,  0, 0, 0,
      0, 0, 0, 0, 0,  6,  2,  0, 0, 0,
      0, 0, 0, 0, 0, 10, 11, 12, 0, 0,
    ]
  })
}

const tilesets = function () {
  const tileEngine = kontra.tileEngine({
    tileHeight: 32,
    tileWidth: 32,
    height: 10,
    width: 10
  })
  ground(tileEngine)
  return tileEngine
}

export default tilesets
