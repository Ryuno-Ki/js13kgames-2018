/* global kontra */
const assets = [
  'tileset.png',
  'dial-up-sound.mp3'
]

function loadAssets () {
  kontra.assets.imagePath = './'
  kontra.assets.audioPath = './'
  const loadedAssets = kontra.assets.load(...assets)
  return loadedAssets
}

export default loadAssets
