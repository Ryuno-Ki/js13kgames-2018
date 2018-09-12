import store from '../../../store'
import get from './get'
import switchIndex from './switchIndex'

const switches = function () {
  const gameState = store.state().gm
  const { l } = gameState

  const emptySwitches = new Array(l)
  const switchTiles = emptySwitches.fill('').map((_, index) => {
    const buttonIndex = switchIndex(index)
    const buttonState = gameState[ buttonIndex ]
    const switchTile = get(_, index, buttonState)
    return switchTile
  })
  return switchTiles
}

export default switches
