import createSwitchesSprite from './sprites/switches'
import tilesets from './tilesets'

const render = function () {
  const tiles = tilesets()
  tiles.render()

  const switches = createSwitchesSprite(32 * 8, 32 * 9)
  switches.render()
}

export default render
