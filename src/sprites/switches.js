/* global kontra */
function createSwitchesSprite (x, y) {
  const spriteOptions = {
    x,
    y,
    color: 'transparent',
    height: 32,
    width: 32,
    type: 'switch'
  }

  const sprite = kontra.sprite(spriteOptions)
  kontra.pointer.track(sprite)
  return sprite
}

export default createSwitchesSprite
