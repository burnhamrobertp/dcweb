import { handleActions } from 'redux-actions'
import { BranchTypes } from 'data/branches'
import { MapTiles } from 'data/map'
import { instantiateMap } from '../actions/map'

const width = 15, height = 15
const DEFAULT_STATE = {
  width,
  height,
  knownBranches: [],
  currentBranch: BranchTypes.caves.name,
  currentDepth: 1,
  // Hard coded for now, I'm not actually going to implement map generation yet
  [BranchTypes.caves.name]: {
    1: instantiateMap([
      Array(width).fill(MapTiles.WALL.INDESTRUCTIBLE),
      ...Array(height - 2).fill(
        [
          MapTiles.WALL.INDESTRUCTIBLE,
          ...Array(width - 2).fill(MapTiles.FLOOR.DIRT_GREY),
          MapTiles.WALL.INDESTRUCTIBLE,
        ],
      ),
      Array(width).fill(MapTiles.WALL.INDESTRUCTIBLE),
    ]),
  },
}

export default handleActions({}, DEFAULT_STATE)