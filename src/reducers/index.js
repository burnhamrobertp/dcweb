import { combineReducers } from 'redux'
import game from './GameReducer'
import messages from './MessagesReducer'

export default combineReducers({
  game,
  messages
})