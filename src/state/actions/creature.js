import { createAction } from 'redux-actions'

export const setCreatures = createAction('SET_CREATURES')
export const setBranchCreatures = createAction('SET_BRANCH_CREATURES',
  (branch, depth, creatures) => ({ branch, depth, creatures }),
)