import constants from '../../constants'
import store from '../../store'

const switches = function () {
  const level = store.state().game.l
  const { r, c, b1 } = constants

  const emptySwitches = new Array(level)
  const switchTiles = emptySwitches.fill(null).map((s, index) => {
    const switchTile = {
      x: c - (1 + index),
      y: r,
      value: b1
    }
    return switchTile
  })
  return switchTiles
}

export default switches
