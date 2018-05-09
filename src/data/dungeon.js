import {LocalizedTileNames} from '../localizations/dungeon'

export const DungeonFeatures = {
  WALL: {
    INDESTRUCTIBLE: {
      name: LocalizedTileNames.wall_i,
      sprite: {
        class: 'stone-dark',
        variants: 4,
      },
    },
  },
  FLOOR: {
    DIRT_GREY: {
      name: LocalizedTileNames.floor_dirt_grey,
      sprite: {
        class: 'floor-grey-dirt',
        variants: 8,
      },
    },
  },
}