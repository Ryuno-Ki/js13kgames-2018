/* global kontra */
import { appendCanvas } from './init'
import { render } from './render'
import { update } from './update'

const gameLoopOptions = {
  render,
  update
}

appendCanvas()
console.log('Initialising kontra', kontra)
kontra.init()
const loop = kontra.gameLoop(gameLoopOptions)
window.loop = loop

/*
import { GameForMachines } from 'mastermind-game'
class LedStrategy extends GameForMachines {
  guess (history) {
    // write your strategy's logic here!
  }
}
*/
