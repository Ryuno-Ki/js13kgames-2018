/**
 * Defines constants used on several places in this game.
 * However, since they are keys, they won't get minified.
 * I'm sorry for the unreadable names, but they are saving bytes...
 *
 * @namespace
 * @type object
 * @property { object } constants    - Holding different values for the game.
 * @property { string } constants.a  - Basename of the sound file.
 * @property { string } constants.ae - Filename of the sound file.
 * @property { string } constants.g  - Name of the ground layer used for tiles.
 * @property { string } constants.t  - Basename of the tileset file.
 * @property { string } constants.te - Filename of the tileset file.
 * @property { number } constants.h  - Height of a tile in px.
 * @property { number } constants.w  - Width of a tile in px.
 * @property { number } constants.r  - Number of tiles in a row of the canvas.
 * @property { number } constants.c  - Number of tiles in a col of the canvas.
 * @property { number } constants.u  - ID of the tile not in the tileset.
 * @property { number } constants.m  - ID of the modem tile.
 * @property { number } constants.p  - ID of the pc tile with wire to top.
 * @property { number } constants.b1 - 1st ID of button/switch tile (active).
 * @property { number } constants.b2 - 2nd ID of button/switch tile (neutral).
 * @property { number } constants.b3 - 3rd ID of button/switch tile (inactive).
 * @property { number } constants.s1 - 1st ID of server tile (pos ok, num ok).
 * @property { number } constants.s2 - 2nd ID of server tile (pos ok, num nok).
 * @property { number } constants.s3 - 3rd ID of server tile (pos nok, num nok).
 */
const constants = {
  a: 'd',
  ae: 'd.mp3',
  g: 'g',
  t: 't',
  te: 't.png',

  h: 32,
  w: 32,
  r: 9,
  c: 9,

  u: 0,
  m: 16,
  p: 12,
  b1: 13,
  b2: 14,
  b3: 15,
  s1: 9,
  s2: 10,
  s3: 11
}

export default constants
