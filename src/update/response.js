const response = function (res) {
  const { correctPosition, correctNumber } = res
  return {
    pos: correctPosition,
    num: correctNumber
  }
}

export default response
