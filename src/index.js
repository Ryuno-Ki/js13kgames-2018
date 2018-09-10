/* global kontra */
import render from './render'
import update from './update'
import loadAssets from './sprites'
import store from './store'

const gameLoopOptions = {
  render,
  update
}

loadAssets().then(() => {
  kontra.init()

  const loop = kontra.gameLoop(gameLoopOptions)
  loop.start()

  store.setState({ loaded: true })
}).catch((error) => {
  console.error('Error on init', error)
})
