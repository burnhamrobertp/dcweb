import { handleActions } from 'redux-actions'
import { instantiateMap } from '../actions/map'

const width = 15
const height = 15
const DEFAULT_STATE = {
  width,
  height,
  knownBranches: [],
  currentBranch: undefined,
  currentDepth: undefined,
}

export default handleActions({
  RESET_MAP_STATE: () => ({
    ...DEFAULT_STATE,
  }),
  SET_BRANCH: (state, action) => ({
    ...state,
    currentBranch: action.payload.branch,
    currentDepth: action.payload.depth,
  }),
  SET_BRANCH_MAP: (state, action) => ({
    ...state,
    [action.payload.branch]: {
      ...state[action.payload.branch],
      [action.payload.depth]: action.payload.map,
    },
  }),
}, DEFAULT_STATE)