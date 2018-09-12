import constants from '../../../constants'

const find = function (maze) {
  const { s1, s2, s3 } = constants
  const servers = [ s1, s2, s3 ]

  const indices = maze
    .map((id, index) => {
      return {
        id,
        index
      }
    })
    .filter((pair) => servers.includes(pair.id))
    .map((pair) => pair.index)
  return indices
}

export default find
