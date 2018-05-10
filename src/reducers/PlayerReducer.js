import { handleActions } from 'redux-actions'
import { PlayerRaces } from '../data/player'

const DEFAULT_STATE = {
  x: 1,
  y: 1,
  hp: 10,
  mana: 0,
  inventory: {
    index: {},
    list: [],
  },
  race: PlayerRaces.human,
}

export default handleActions({

}, DEFAULT_STATE)