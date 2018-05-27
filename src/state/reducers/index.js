import { combineReducers } from 'redux'
import creature from './CreatureReducer'
import creatureFeature from './CreatureFeatureReducer'
import game from './GameReducer'
import map from './MapReducer'
import message from './MessageReducer'
import modal from './ModalReducer'
import player from './PlayerReducer'

export default combineReducers({
  creature,
  creatureFeature,
  game,
  map,
  message,
  modal,
  player,
})