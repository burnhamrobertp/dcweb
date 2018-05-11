import { BranchNames } from '../localizations/branches'
import { MapTiles } from './map'
import { IBranch } from '../common/types'

export const BranchTypes: { [key: string]: IBranch } = {
  caves: {
    name: BranchNames.caves,
    tiles: {
      floor: [MapTiles.FLOOR.DIRT_GREY],
      walls: [MapTiles.WALL.INDESTRUCTIBLE],
    },
  },
}