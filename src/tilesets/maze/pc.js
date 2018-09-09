import sizes from '../sizes'

const pc = function () {
  const { rows, cols } = sizes

  const pcValue = 12
  const pcTile = {
    x: rows,
    y: cols,
    value: pcValue
  }
  return [ pcTile ]
}

export default pc
