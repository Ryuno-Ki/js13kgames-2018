/* global kontra */
import { appendCanvas } from './init'
import { render } from './render'
import { update } from './update'
import { loadAssets } from './sprites'
import { store } from './store'

const gameLoopOptions = {
  render,
  update
}

appendCanvas()
loadAssets().then(() => {
  console.log('Initialising', kontra)
  kontra.init()
  const loop = kontra.gameLoop(gameLoopOptions)
  store.dispatch({ type: 'INITIAL' })
  loop.start()
  setTimeout(() => { loop.stop() }, 300)
}).catch((error) => {
  console.error('Could not initialise, because', error)
})
