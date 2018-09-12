/* global k */
import render from './render'
import update from './update'
import loadAssets from './sprites'
import store from './store'

const gameLoopOptions = {
  render,
  update
}

loadAssets().then(() => {
  k.init()

  const loop = k.gameLoop(gameLoopOptions)
  loop.start()
}).catch(() => {})
