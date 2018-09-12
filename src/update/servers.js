import serverIndex from '../tilesets/maze/servers/serverIndex'
import store from '../store'

const servers = function (state, response) {
  const { m, l } = state.gm
  const { correctPosition, correctNumber } = response

  const values = []
  for (let g = 0; g < correctPosition; g++) { values.push(true) }
  for (let r = 0; r < correctNumber; r++) { values.push(false) }
  let len = values.length
  for (let b = len; b < l; b++) { values.push(undefined) }

  values.sort()
  values.reverse()
  len = values.length
  for (let i = 0; i < len; i++) {
    const value = values.pop()
    const sIndex = serverIndex(i)
    state.gm[ sIndex ] = value
  }
  store.setState(state)
}

export default servers
