import { createAction } from 'redux-actions'

export const openModal = createAction('SET_MODAL_OPEN', (id, props, content) => ({ id, props, content }))
export const closeModal = createAction('SET_MODAL_CLOSED')