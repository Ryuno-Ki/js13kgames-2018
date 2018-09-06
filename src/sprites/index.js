/* global kontra */
const assets = [
  'computer.sprite.png',
  'Switch.png'
]

function loadAssets () {
  kontra.assets.imagePath = './assets'
  const loadedAssets = kontra.assets.load(...assets)
  return loadedAssets
}

export default loadAssets
