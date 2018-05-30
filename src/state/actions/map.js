import { createAction } from 'redux-actions'

export const resetMapState = createAction('RESET_MAP_STATE')
export const setBranch = createAction('SET_BRANCH', (branch, depth) => ({ branch, depth }))
export const setBranchMap = createAction('SET_BRANCH_MAP', (branch, depth, map) => ({ branch, depth, map }))

export const generateBranchMap = createAction('GENERATE_BRANCH_MAP', (branch, depth) => ({ branch, depth }))