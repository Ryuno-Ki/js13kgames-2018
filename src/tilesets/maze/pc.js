import constants from '../../constants'

const pc = function () {
  const { r, c, p } = constants

  const pcTile = {
    x: r,
    y: c,
    value: p
  }
  return [ pcTile ]
}

export default pc
