/* global k */
import constants from '../constants'

/**
 * Loads the assets needed in the game.
 * That is, the tileset and the audio file.
 *
 * @module sprites
 * @exports loadAssets
 * @requires constants
 */

/**
 * Loads the assets.
 *
 * @public
 * @function
 * @returns { promise } loadedAssets - Resolves once all assets are ready.
 */
function loadAssets () {
  const { ae, te } = constants

  k.assets.imagePath = './'
  k.assets.audioPath = './'

  const loadedAssets = k.assets.load(ae, te)
  return loadedAssets
}

export default loadAssets
