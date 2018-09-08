/* global kontra */
const assets = [
  'tileset.png'
]

function loadAssets () {
  kontra.assets.imagePath = './'
  const loadedAssets = kontra.assets.load(...assets)
  return loadedAssets
}

export default loadAssets
