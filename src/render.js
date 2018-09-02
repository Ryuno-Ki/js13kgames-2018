import { createSwitchesSprite } from './sprites/switches'

const switchesSprite = createSwitchesSprite()

const render = function () {
  console.log('Rendering switch')
  /*
  switchesSprite.then((sprite) => {
    console.log('Sprite', sprite)
    sprite.render()
  })
  */
}

export {
  render
}
