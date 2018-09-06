function renderSprite (self) {
  const NUMBER_OF_IMAGES_ON_SPRITE = 3
  const ACTIVE_PC = 2
  const { context, image, height, width, x, y } = self

  // Subimage values
  const sWidth = width / NUMBER_OF_IMAGES_ON_SPRITE
  const sHeight = height
  const sx = ACTIVE_PC * sWidth
  const sy = y

  // Destination values
  const dWidth = sWidth
  const dHeight = sHeight
  const dx = x
  const dy = y

  setTimeout(() => {
    // Draw whole spritesheet for debugging
    // context.drawImage(image, dx, dy, dWidth, dHeight)
    context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }, 0)
}

function createComputerSprite (x, y) {
  const spriteOptions = {
    x: x || 0,
    y: y || 0,
    image: kontra.assets.images['computer.sprite'],
    type: 'computer'
  }

  spriteOptions.render = function () { renderSprite(this) }
  const sprite = kontra.sprite(spriteOptions)
  return sprite
}

export default createComputerSprite
