/* global k */
import constants from '../constants'
import store from '../store'
import maze from './maze'

const init = function (tileEngine) {
  const level = store.state().gm.l
  const { g, t } = constants

  tileEngine.addTilesets({ image: t })
  tileEngine.addLayers({
    name: g,
    data: maze()
  })
}

const tilesets = function () {
  const { h, w, r, c } = constants
  const tileEngine = k.tileEngine({
    tileHeight: h,
    tileWidth: w,
    height: r,
    width: c
  })
  init(tileEngine)
  return tileEngine
}

export default tilesets
