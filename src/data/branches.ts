import { BranchNames } from '../localizations/branches'
import { MapTiles } from './map'
import { Dictionary, IBranch } from '../common/types'
import { BranchType } from '../common/enum'

export const Branches: Dictionary<BranchType, IBranch> = {
  CAVES: {
    name: BranchNames.caves,
    tiles: {
      FLOOR: [MapTiles.FLOOR.DIRT_GREY],
      WALL: [MapTiles.WALL.INDESTRUCTIBLE],
    },
  },
}