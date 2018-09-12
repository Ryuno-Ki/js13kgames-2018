import serverIndex from '../tilesets/maze/servers/serverIndex'
import store from '../store'

const servers = function (state, response) {
  const { m, l } = state.gm
  const { correctPosition, correctNumber } = response

  const values = []
  for (let g = 0; g < correctPosition; g++) { values.push(true) }
  for (let r = 0; r < correctNumber; r++) { values.push(false) }
  const len = values.length
  for (let b = len; b < l; b++) { values.push(undefined) }

  for (let i = 0; i < values.length; i++) {
    const value = values.pop()
    const sIndex = serverIndex(i)
    state.gm[ sIndex ] = value
  }
  store.setState(state)
}

export default servers
