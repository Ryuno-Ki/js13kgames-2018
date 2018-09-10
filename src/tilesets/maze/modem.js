import constants from '../../constants'

const modem = function () {
  const { r, c, m } = constants

  const modemTile = {
    x: c,
    y: r - 1,
    value: m
  }
  return [ modemTile ]
}

export default modem
