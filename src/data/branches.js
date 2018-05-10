import { BranchNames } from '../localizations/branches'
import { MapTiles } from './map'

export const BranchTypes = {
  caves: {
    name: BranchNames.caves,
    tiles: {
      floor: [ MapTiles.FLOOR.DIRT_GREY ],
      walls: [ MapTiles.WALL.INDESTRUCTIBLE ]
    }
  }
}