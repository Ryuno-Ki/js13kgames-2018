import { createSwitchesSprite } from './sprites/switches'
import { store } from './store'

const render = function () {
  const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    const { ui } = state
    const { switch1_x, switch1_y, switch1_active } = ui

    const sprite = createSwitchesSprite(switch1_x, switch1_y, switch1_active)
    sprite.render()
    unsubscribe()
  })
}

export {
  render
}
