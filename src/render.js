import constants from './constants'
import factory from './sprites/factory'
import store from './store'
import tilesets from './tilesets'

const render = function () {
  const tiles = tilesets()
  tiles.render()

  const { h, w } = constants
  const pc = factory({ x: 8 * h, y: 8 * w, type: 'p' })
  pc.render()

  const level = store.state().gm.l
  let switches
  for (let i = 0; i < level; i++) {
    switches = factory({ x: (7 - i) * h, y: 8 * w, i })
    switches.render()
  }
}

export default render
