/* global kontra */
import store from './store'

const update = function (dt) {
  const loaded = store.state().loaded
  console.log('Toggling loaded', loaded)
  store.setState({
    loaded: !loaded
  })
  kontra.pointer.onDown((event, object) => {
    console.log('Clicked on', event, object)
    if (object) {
      kontra.assets.audio['dial-up-sound'].play()
    }
  })
}

export default update
