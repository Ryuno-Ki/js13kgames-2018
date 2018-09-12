/* global k */
import pc from './pc'
import switches from './switches'

const update = function () {
  k.pointer.onDown((event, object) => {
    if (event.type === 'mousedown' && object) {
      const { type } = object
      if (type === 'p') { pc() } else { switches(object) }
    }
  })
}

export default update
