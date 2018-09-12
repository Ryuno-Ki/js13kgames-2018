import constants from './constants'
import factory from './sprites/factory'
import store from './store'
import tilesets from './tilesets'

const render = function () {
  const { gm } = store.state()
  const tiles = tilesets()
  tiles.render()
  if (gm.w) { return }

  const { h, w } = constants
  const pc = factory({ x: 8 * h, y: 8 * w, type: 'p' })
  pc.render()

  let switches
  for (let i = 0; i < gm.l; i++) {
    switches = factory({ x: (7 - i) * h, y: 8 * w, i })
    switches.render()
  }
}

export default render
