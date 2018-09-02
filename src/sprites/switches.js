/* global kontra */
kontra.assets.imagePath = './assets'
const promisedSwitch = kontra.assets.load('Switch.png')

function createSwitchesSprite (x, y) {
  return promisedSwitch.then(() => {
    const spriteOptions = {
      x: x || 0,
      y: y || 0,
      image: kontra.assets.images.Switch,
      type: 'Switch'
    }

    const switchesSprite = kontra.sprite(spriteOptions)
    return switchesSprite
  })
}

export {
  createSwitchesSprite
}
