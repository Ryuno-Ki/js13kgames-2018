import createComputerSprite from './sprites/computers'
import createSwitchesSprite from './sprites/switches'
import store from './store'

const render = function () {
  store.onChange((state) => {
    const { ui } = state
    const { computers, switches } = ui

    computers.map((computerState) => {
      const { x, y } = computerState
      const sprite = createComputerSprite(x, y)
      return sprite
    }).forEach((sprite) => sprite.render())

    switches.map((switchState) => {
      const { x, y, active } = switchState
      const sprite = createSwitchesSprite(x, y, active)
      return sprite
    }).forEach((sprite) => sprite.render())
  })
}

export default render
