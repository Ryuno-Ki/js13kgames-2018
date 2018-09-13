/**
 * Aliases the response object of the mastermind game engine to save bytes.
 *
 * @module update/response
 * @exports response
 */

/**
 * Mapping the response object.
 *
 * @public
 * @function
 * @arg { object } res                 - A response object of mastermind.
 * @arg { number } res.correctPosition - Number of tiles in correct position.
 * @arg { number } res.correctNumber   - Correct number, wrong position.
 * @returns { object } resp            - Aliased response object.
 * @returns { number } resp.pos        - Alias for correctPosition.
 * @returns { number } resp.num        - Alias for correctNumber.
 */
const response = function (res) {
  const { correctPosition, correctNumber } = res
  return {
    pos: correctPosition,
    num: correctNumber
  }
}

export default response
