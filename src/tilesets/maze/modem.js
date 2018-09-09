import sizes from '../sizes'

const modem = function () {
  const { rows, cols } = sizes

  const modemValue = 16
  const modemTile = {
    x: cols,
    y: rows - 1,
    value: modemValue
  }
  return [ modemTile ]
}

export default modem
