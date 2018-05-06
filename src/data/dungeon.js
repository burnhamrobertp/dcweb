import { DungeonNames } from "../localizations/dungeon";

export const DungeonFeatures = {
  WALL: {
    INDESTRUCTIBLE: {
      name: DungeonNames.wall_i,
      sprite: {
        class: 'stone-dark',
        variants: 4,
      }
    }
  },
  FLOOR: {
    DIRT_GREY: {
      name: DungeonNames.floor_dirt_grey,
      sprite: {
        class: 'floor-grey-dirt',
        variants: 8,
      }
    }
  }
};