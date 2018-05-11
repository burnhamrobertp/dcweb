import { combineReducers } from 'redux'
import game from './GameReducer'
import map from './MapReducer'
import message from './MessageReducer'
import player from './PlayerReducer'

export default combineReducers({
  game,
  map,
  message,
  player,
})