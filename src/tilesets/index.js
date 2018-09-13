/* global k */
import constants from '../constants'
import store from '../store'
import maze from './maze'

/**
 * Invokes kontra's tileEngine.
 *
 * @module tilesets
 * @exports tilesets
 * @requires constants
 * @requires module:store
 * @requires module:tilesets/maze
 */

/**
 * Initialises the tileEngine by adding a tileset and layer.
 *
 * @private
 * @function
 * @arg { kontra.tileEngine } tileEngine - A tileEngine object of kontra.
 */
const init = function (tileEngine) {
  const level = store.state().gm.l
  const { g, t } = constants

  tileEngine.addTilesets({ image: t })
  tileEngine.addLayers({
    name: g,
    data: maze()
  })
}

/**
 * Creates a tileEngine and initialises it.
 *
 * @public
 * @function
 */
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
