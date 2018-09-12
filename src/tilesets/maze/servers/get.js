import constants from '../../../constants'

const get = function (_, index, serverState) {
  const { s1, s2, s3 } = constants

  const serverTile = {
    x: 1,
    y: 1 + index,
    value: typeof serverState === 'undefined'
      ? s3
      : (serverState === true
        ? s1
        : s2)
  }
  return serverTile
}

export default get
