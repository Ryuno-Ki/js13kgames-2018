/* global kontra */
import constants from '../constants'
import store from '../store'
import maze from './maze'

const init = function (tileEngine) {
  const level = store.state().level
  const { g, t } = constants

  tileEngine.addTilesets({ image: t })
  tileEngine.addLayers({
    name: g,
    zIndex: level * 10,
    data: maze()
  })
}

const tilesets = function () {
  const { h, w, r, c } = constants
  const tileEngine = kontra.tileEngine({
    tileHeight: h,
    tileWidth: w,
    height: r,
    width: c
  })
  init(tileEngine)
  return tileEngine
}

export default tilesets
