/**
 * Picks an element by random from an array.
 *
 * @module tilesets/randomPick
 * @exports randomPick
 */

/**
 * Picks an element by random. Equally distributed selection!
 *
 * @public
 * @function
 * @arg { Array<any> } array - An arbitrary array.
 * @returns { any } element  - An element of that array.
 */
const randomPick = function (array) {
  return array[ Math.floor(Math.random() * array.length) ]
}

export default randomPick
