import { handleActions } from 'redux-actions'

const DEFAULT_STATE = {
  // keyed by branch names, similar to MapReducer's structure
}

export default handleActions({
  SET_BRANCH_CREATURES: (state, action) => ({
    ...state,
    [action.payload.branch]: {
      ...state[action.payload.branch],
      [action.payload.depth]: action.payload.creatures,
    },
  }),
}, DEFAULT_STATE)