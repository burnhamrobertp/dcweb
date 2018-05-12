import { TileNames } from '../localizations/map'
import { DictionaryIndex, IMapTileConfig } from '../common/types'
import { MapTileType } from '../common/enum'

export const MapTiles: DictionaryIndex<MapTileType, IMapTileConfig> = {
  WALL: {
    INDESTRUCTIBLE: {
      name: TileNames.wall_i,
      sprite: {
        class: 'stone-dark',
        variants: 4,
      },
    },
  },
  FLOOR: {
    DIRT_GREY: {
      name: TileNames.floor_dirt_grey,
      sprite: {
        class: 'floor-grey-dirt',
        variants: 8,
      },
    },
  },
}