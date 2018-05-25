import { createAction } from 'redux-actions'
import { setBranch } from './map'
import { BranchType, GameState } from 'common/enum'

export const setGameState = createAction('SET_GAME_STATE')

export function startGame() {
  return (dispatch) => {
    dispatch(setBranch(BranchType.CAVES, 1))
    dispatch(setGameState(GameState.START))
  }
}