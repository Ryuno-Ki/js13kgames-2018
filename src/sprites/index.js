/* global kontra */
const assets = [
  'Switch.png'
]

function loadAssets () {
  kontra.assets.imagePath = './assets'
  const loadedAssets = kontra.assets.load(...assets)
  return loadedAssets
}

export {
  loadAssets
}
