import store from '../store'
import switchIndex from '../tilesets/maze/switches/switchIndex'

const switches = function (object) {
  const currentState = store.state()
  const bIndex = switchIndex(object.i)
  const buttonState = currentState.gm[ bIndex ]

  store.setState({
    ...currentState,
    gm: {
      ...currentState.gm,
      [bIndex]: !buttonState
    }
  })
}

export default switches
