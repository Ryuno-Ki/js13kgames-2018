/* global kontra */
import constants from './constants'

const update = function (dt) {
  kontra.pointer.onDown((event, object) => {
    // TODO: Toggle state if clicked on Switch
    //       Trigger re-render of layer
    const { a } = constants
    console.log('Clicked on', event, object)
    if (object) {
      kontra.assets.audio[ a ].play()
    }
  })
}

export default update
