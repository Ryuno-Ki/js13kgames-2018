import constants from '../../../constants'

const find = function (maze) {
  const { b1, b2, b3 } = constants
  const switches = [ b1, b2, b3 ]

  const indices = maze
    .map((id, index) => {
      return {
        id,
        index
      }
    })
    .filter((pair) => switches.includes(pair.id))
    .map((pair) => pair.index)
  indices.reverse()
  return indices
}

export default find
