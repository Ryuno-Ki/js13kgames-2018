// TODO: Think about using bitwise operations:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

/**
 * Lists the allowed connections of a tile.
 * Each object has an ID (matching the tile logic of kontra) and booleans for
 * Allowed connection to top / right / bottom / left.
 *
 * @namespace
 * @type Array<object>
 */
const neighbors = [{
  id: 1,
  t: false,
  r: false,
  b: true,
  l: true
}, {
  id: 2,
  t: true,
  r: true,
  b: false,
  l: false
}, {
  id: 3,
  t: true,
  r: false,
  b: false,
  l: true
}, {
  id: 4,
  t: false,
  r: true,
  b: true,
  l: false
}, {
  id: 5,
  t: false,
  r: true,
  b: false,
  l: true
}, {
  id: 6,
  t: true,
  r: false,
  b: true,
  l: false
}, {
  id: 7,
  t: false,
  r: false,
  b: false,
  l: false
}, {
  id: 8,
  t: true,
  r: false,
  b: true,
  l: true
}, {
  id: 9,
  t: false,
  r: true,
  b: false,
  l: false
}, {
  id: 10,
  t: false,
  r: true,
  b: false,
  l: false
}, {
  id: 11,
  t: false,
  r: true,
  b: false,
  l: false
}, {
  id: 12,
  t: true,
  r: false,
  b: false,
  l: false
}, {
  id: 13,
  t: false,
  r: false,
  b: false,
  l: false
}, {
  id: 14,
  t: false,
  r: false,
  b: false,
  l: false
}, {
  id: 15,
  t: false,
  r: false,
  b: false,
  l: false
}, {
  id: 16,
  t: false,
  r: false,
  b: true,
  l: true
}]

export default neighbors
