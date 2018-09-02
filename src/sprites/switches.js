/* global kontra */
kontra.assets.imagePath = './assets'
const promisedSwitch = kontra.assets.load('Switch.png')

function createSwitchesSprite (x, y) {
  console.log('Creating switch sprite')
/*
  return promisedSwitch.then(() => {
    const image = new window.Image()
    image.src = kontra.assets.images.Switch

    const spriteOptions = {
      x: x || 0,
      y: y || 0,
      image: image,
      type: 'Switch'
    }

    const switchesSprite = kontra.sprite(spriteOptions)
    return new Promise((resolve, reject) => {
      image.onload = () => {
        switchesSprite.render()
        return Promise.resolve(switchesSprite)
      }
      return Promise.resolve(switchesSprite)
    })
  })
*/
}

export {
  createSwitchesSprite
}
