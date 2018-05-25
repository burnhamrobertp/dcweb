import { setBranchCreatures } from '../actions/creature'

export const generateCreatures = ({ dispatch, getState }) => next => action => {
  if (action.type === 'GENERATE_BRANCH_MAP') {
    const { branch, depth } = action.payload

    dispatch(setBranchCreatures(branch, depth, []))
  }

  next(action)
}