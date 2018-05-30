import { createAction } from 'redux-actions'

export const resetModalState = createAction('RESET_MODAL_STATE')
export const openModal = createAction('SET_MODAL_OPEN', (id, props, content) => ({ id, props, content }))
export const closeModal = createAction('SET_MODAL_CLOSED')