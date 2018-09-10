/* global kontra */
import constants from '../constants'

function loadAssets () {
  const { ae, te } = constants

  kontra.assets.imagePath = './'
  kontra.assets.audioPath = './'

  const loadedAssets = kontra.assets.load(ae, te)
  return loadedAssets
}

export default loadAssets
