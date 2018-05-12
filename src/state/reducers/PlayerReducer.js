import { handleActions } from 'redux-actions'
import { PlayerRaces } from 'data/player'

const DEFAULT_STATE = {
  x: 1,
  y: 1,
  hp: 10,
  mana: 0,
  inventory: {
    index: {},
    list: [],
  },
  race: PlayerRaces.HUMAN,
}

export default handleActions(
  {
    PLAYER_ACTION_DIRECTION: (state, action) => ({
      ...state,
      x: state.x + action.payload.x,
      y: state.y + action.payload.y,
    })
  }, DEFAULT_STATE
)