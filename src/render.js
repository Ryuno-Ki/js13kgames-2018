import constants from './constants'
import createSwitchesSprite from './sprites/switches'
import tilesets from './tilesets'

const render = function () {
  const tiles = tilesets()
  tiles.render()

  const { h, w } = constants
  const switches = createSwitchesSprite(8 * h, 9 * w)
  switches.render()
}

export default render
