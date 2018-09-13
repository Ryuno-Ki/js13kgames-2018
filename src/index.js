/* global k */
import render from './render'
import update from './update'
import loadAssets from './sprites'

const gameLoopOptions = {
  render,
  update
}

/**
 * Starts the game.
 *
 * @requires module:render
 * @requires module:update
 * @requires module:loadAssets
 */
loadAssets().then(() => {
  k.init()

  const loop = k.gameLoop(gameLoopOptions)
  loop.start()
}).catch(() => {})
