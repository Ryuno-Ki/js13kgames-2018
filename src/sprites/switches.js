/* global kontra */
function renderSprite (self, active) {
  const NUMBER_OF_IMAGES_ON_SPRITE = 3
  const LEFT = 0
  const MIDDLE = 1
  const RIGHT = 2
  const { context, image, height, width, x, y } = self

  // Subimage values
  const sy = y
  const sWidth = width / NUMBER_OF_IMAGES_ON_SPRITE
  const sHeight = height

  // Destination values
  const dx = x
  const dy = y
  const dWidth = sWidth
  const dHeight = sHeight

  let sx
  // Determine, which sprite on spritesheet to display
  if (active === true) {
    sx = LEFT * sWidth
  } else if (active === false) {
    sx = RIGHT * sWidth
  } else {
    sx = MIDDLE * sWidth
  }

  setTimeout(() => {
    // Draw whole spritesheet for debugging
    // context.drawImage(image, dx, dy, dWidth, dHeight)
    context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }, 0)
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

export default createSwitchesSprite
