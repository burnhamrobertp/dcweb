import { createAction } from 'redux-actions'

export const actionDirection = createAction('PLAYER_ACTION_DIRECTION', (x, y) => ({x, y}))