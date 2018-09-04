/* global kontra */

function renderSprite (self, active) {
  const numberOfImagesOnSprite = 3
  const { context, image, height, width, x, y } = self

  // Subimage values
  const sy = y
  const sWidth = width / numberOfImagesOnSprite
  const sHeight = height

  // Destination values
  const dx = x
  const dy = y
  const dWidth = sWidth
  const dHeight = sHeight

  let sx
  // Determine, which sprite on spritesheet to display
  if (active === true) {
    sx = 0 * sWidth  // leftmost position
  } else if (active === false) {
    sx = 2 * sWidth  // rightmost position
  } else {
    sx = 1 * sWidth  // middle position
  }

  console.log(context, image, dx, dy, dWidth, dHeight)
  debugger
  context.drawImage(image, dx, dy, dWidth, dHeight)
  // context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
}

function createSwitchesSprite (x, y, active) {
  const spriteOptions = {
    x: x || 0,
    y: y || 0,
    image: kontra.assets.images.Switch,
    type: 'Switch'
  }

  spriteOptions.render = function () { renderSprite(this, active) }
  const sprite = kontra.sprite(spriteOptions)
  return sprite
}

export {
  createSwitchesSprite
}
