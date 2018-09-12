const constants = {
  // Assets
  a: 'd', // audio (dial-up)
  ae: 'd.mp3', // audio with extension
  g: 'g', // ground layer
  t: 't', // tileset
  te: 't.png', // tileset with extension

  // World
  h: 32, // height of a tile
  w: 32, // width of a tile
  r: 9, // tiles in a row
  c: 9, // riles in a column

  u: 0, // unset tile id
  m: 16, // modem id
  p: 12, // personal computer id
  b1: 13, // button in active position
  b2: 14, // button in neutral position
  b3: 15, // button in deactive position
  s1: 9, // server with correct position and value
  s2: 10, // server with correct position, but wrong value
  s3: 11 // server with neither correct position nor value
}

export default constants
