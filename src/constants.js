const constants = Object.freeze({
  // Assets
  a: 'dial-up', // audio
  ae: 'dial-up.mp3', // audio with extension
  g: 'ground', // ground layer
  t: 'tileset', // tileset
  te: 'tileset.png', // tileset with extension

  // World
  h: 32, // height of a tile
  w: 32, // width of a tile
  r: 10, // tiles in a row
  c: 10, // riles in a column

  u: 0, // unset tile id
  m: 16, // modem
  p: 12, // personal computer
  b1: 14, // button in neutral position
  s1: 9, // server with correct position and value
  s2: 10, // server with correct position, but wrong value
  s3: 11 // server with neither correct position nor value
})

export default constants
