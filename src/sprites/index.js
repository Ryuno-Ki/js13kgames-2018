/* global k */
import constants from '../constants'

function loadAssets () {
  const { ae, te } = constants

  k.assets.imagePath = './'
  k.assets.audioPath = './'

  const loadedAssets = k.assets.load(ae, te)
  return loadedAssets
}

export default loadAssets
