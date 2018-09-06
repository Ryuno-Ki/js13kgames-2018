const COMPUTER_HEIGHT = 32
const SWITCH_WIDTH = 32

const ui = {
  switches: [{
    x: 0 * SWITCH_WIDTH,
    y: 0,
    active: null
  }, {
    x: 1 * SWITCH_WIDTH,
    y: 0,
    active: true
  }, {
    x: 2 * SWITCH_WIDTH,
    y: 0,
    active: false
  }],
  computers: [{
    x: 0,
    y: 1 * COMPUTER_HEIGHT
  }, {
    x: 0,
    y: 2 * COMPUTER_HEIGHT
  }]
}

export default ui
