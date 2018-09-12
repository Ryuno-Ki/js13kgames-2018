/* global k */
import constants from '../constants'

const factory = function (options) {
  const { h, w } = constants
  const spriteOptions = {
    ...options,
    color: '#0000',
    height: h,
    width: w
  }

  const sprite = k.sprite(spriteOptions)
  k.pointer.track(sprite)
  return sprite
}

export default factory
