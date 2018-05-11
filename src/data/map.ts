import { TileNames } from '../localizations/map'
import { IMapCatalog } from '../common/types'

export const MapTiles: IMapCatalog = {
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