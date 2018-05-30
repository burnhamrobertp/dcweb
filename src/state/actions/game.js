import { createAction } from 'redux-actions'
import { resetMapState, setBranch } from './map'
import { BranchType, GameState } from 'common/enum'
import { resetModalState } from './modal'

export const setGameState = createAction('SET_GAME_STATE')

export function startGame() {
  return (dispatch) => {
    dispatch(setBranch(BranchType.CAVES, 1))
    dispatch(setGameState(GameState.START))
  }
}

export function endGame() {
  return (dispatch) => {
    dispatch(resetModalState())
    dispatch(setGameState(GameState.END))
    dispatch(resetMapState())
  }
}