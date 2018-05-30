import { handleActions } from 'redux-actions'
import omit from 'object.omit'

const DEFAULT_STATE = {
  index: {},
  stack: [],
}

export default handleActions({
  RESET_MODAL_STATE: () => ({
    ...DEFAULT_STATE
  }),
  SET_MODAL_OPEN: (state, action) => ({
    ...state,
    index: {
      ...state.index,
      [action.payload.id]: {
        props: { id: action.payload.id, ...action.payload.props },
        content: action.payload.content
      },
    },
    stack: [
      action.payload.id,
      ...state.stack,
    ],
  }),
  SET_MODAL_CLOSED: (state, action) => {
    const modalId = action.payload
    const stack = state.stack
    const newStack = modalId && stack.indexOf(modalId) !== -1 ? stack.slice(0, stack.indexOf(modalId)) : stack.shift()

    return {
      ...state,
      index: {
        ...omit(state.index, (val, key) => !newStack.includes(key)),
      },
      stack: newStack,
    }
  },
}, DEFAULT_STATE)