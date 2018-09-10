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
  console.log('Initialising', kontra)
  kontra.init()
  const loop = kontra.gameLoop(gameLoopOptions)
  loop.start()

  store.setState({ loaded: true })
  // For debugging
  setTimeout(() => { loop.stop() }, 100)
}).catch((error) => {
  console.error('Could not initialise, because', error)
})
