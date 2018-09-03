const appendCanvas = function () {
  const firstChild = document.body.firstChild
  const canvas = document.createElement('canvas')
  canvas.setAttribute('id', 'game')
  document.body.insertBefore(canvas, firstChild)
}

export {
  appendCanvas,
}
