import { handleActions } from 'redux-actions'
import { BranchTypes } from '../data/branches'

const DEFAULT_STATE = {
  knownBranches: [],
  currentBranch: BranchTypes.caves
}

export default handleActions({

}, DEFAULT_STATE)