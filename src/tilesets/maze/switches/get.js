import constants from '../../../constants'

const get = function (_, index, buttonState) {
  const { r, c, b1, b2, b3 } = constants

  const switchTile = {
    x: c - (1 + index),
    y: r,
    value: typeof buttonState === 'undefined'
      ? b2
      : (buttonState === true
        ? b1
        : b3)
  }
  return switchTile
}

export default get
