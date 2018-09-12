import { Game } from 'mastermind-game'

const updateWithSecret = function (state) {
  const { gm, mm } = state
  const { l } = gm
  const game = new Game({
    numChoices: mm.numChoices,
    secretLength: l
  })

  return {
    ...state,
    mm: {
      ...mm,
      secretLength: l,
      secret: game.secret
    }
  }
}

export default updateWithSecret
