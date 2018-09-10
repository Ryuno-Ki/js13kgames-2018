/* global kontra */
import constants from '../constants'

function createSwitchesSprite (x, y) {
  const { h, w } = constants
  const spriteOptions = {
    x,
    y,
    color: 'transparent',
    height: h,
    width: w,
    type: 'switch'
  }

  const sprite = kontra.sprite(spriteOptions)
  kontra.pointer.track(sprite)
  return sprite
}

export default createSwitchesSprite
