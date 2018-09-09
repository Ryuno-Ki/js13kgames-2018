import sizes from '../sizes'

const switches = function () {
  const level = 1  // TODO: Read from store
  const { rows, cols } = sizes
  const switchValue = 14

  const emptySwitches = new Array(level)
  const switchTiles = emptySwitches.fill(null).map((s, index) => {
    const switchTile = {
      x: cols - (1 + index),
      y: rows,
      value: switchValue
    }
    return switchTile
  })
  return switchTiles
}

export default switches
