import { createSwitchesSprite } from './sprites/switches'

const switchesSprite = createSwitchesSprite()

const update = function (dt) {
  console.log('Time diff', dt)
  switchesSprite.then((sprite) => {
    sprite.update()
  })
}

export {
  update
}
