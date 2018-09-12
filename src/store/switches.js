import find from '../tilesets/maze/switches/find'
import get from '../tilesets/maze/switches/get'
import switchIndex from '../tilesets/maze/switches/switchIndex'

const switches = function (currentState) {
  const gameState = currentState.gm
  const { m, l } = gameState

  const switchIndices = find(m)
  switchIndices.forEach((index, i) => {
    const buttonIndex = switchIndex(i)
    const buttonState = gameState[ buttonIndex ]

    const switchTile = get('', i, buttonState)
    m[ index ] = switchTile.value
  })
}

export default switches
