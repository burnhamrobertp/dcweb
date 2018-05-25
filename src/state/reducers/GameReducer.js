import { handleActions } from 'redux-actions'
import { GameState } from '../../common/enum'

const DEFAULT_STATE = {
  state: GameState.NO_GAME,
}

export default handleActions({
  SET_GAME_STATE: (state, action) => ({
    ...state,
    state: action.payload
  })
}, DEFAULT_STATE)