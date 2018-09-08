/* global kontra */
import render from './render'
import update from './update'
import loadAssets from './sprites'
import store from './store'
import tilesets from './tilesets'

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
  setTimeout(() => { loop.stop() }, 300)
}).catch((error) => {
  console.error('Could not initialise, because', error)
})
