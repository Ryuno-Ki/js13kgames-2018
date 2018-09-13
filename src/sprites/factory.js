/* global k */
import constants from '../constants'

/**
 * Provides a factory method for generating kontra sprites
 *
 * @module sprites/factory
 * @exports factory
 * @requires constants
 */

/**
 * Factory method to generate kontra sprites.
 *
 * @public
 * @function
 * @arg { object } options      - Options for generating a sprite.
 * @arg { number } options.x    - The x position of the new sprite.
 * @arg { number } options.y    - The y position of the new sprite.
 * @arg { string } options.type - For better filtering, an optional type.
 * @arg { number } options.i    - For better filtering, an optional index.
 */
const factory = function (options) {
  const { h, w } = constants
  const spriteOptions = {
    ...options,
    color: '#0000', // Also known as transparent black.
    height: h,
    width: w
  }

  const sprite = k.sprite(spriteOptions)
  /*
   * Tracking it, so we can listen to pointer events.
   */
  k.pointer.track(sprite)
  return sprite
}

export default factory
