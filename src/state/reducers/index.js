import { combineReducers } from 'redux'
import game from './GameReducer'
import map from './MapReducer'
import messages from './MessagesReducer'
import player from './PlayerReducer'

export default combineReducers({
  game,
  map,
  messages,
  player,
})