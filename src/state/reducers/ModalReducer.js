import { handleActions } from 'redux-actions'

const DEFAULT_STATE = {
  index: {},
  stack: [],
}

export default handleActions({
  SET_MODAL_OPEN: (state, action) => ({
    ...state,
    index: {
      ...state.index,
      [action.payload.id]: { props: action.payload.props, content: action.payload.content }
    },
    stack: [
      action.payload.id,
      ...state.stack
    ]
  })
}, DEFAULT_STATE)