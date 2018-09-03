/* global kontra */
import { appendCanvas } from './init'
import { render } from './render'
import { update } from './update'
import { store } from './store'

const gameLoopOptions = {
  render,
  update
}

appendCanvas()
console.log('Initialising', kontra)
kontra.init()
const loop = kontra.gameLoop(gameLoopOptions)
window.loop = loop
