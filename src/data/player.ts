import { RaceNames } from '../localizations/creatures'
import { Dictionary, IRace } from '../common/types'
import { PlayerRaceType } from '../common/enum'

export const PlayerRaces: Dictionary<PlayerRaceType, IRace> = {
  DWARF: {
    name: RaceNames.dwarf,
    sprite: {
      class: 'player-dwarf-m',
    },
  },
  ELF: {
    name: RaceNames.elf,
    sprite: {
      class: 'player-elf-m',
    },
  },
  GNOME: {
    name: RaceNames.gnome,
    sprite: {
      class: 'player-gnome-m',
    },
  },
  HUMAN: {
    name: RaceNames.human,
    sprite: {
      class: 'player-human-m',
    },
  },
  ORC: {
    name: RaceNames.orc,
    sprite: {
      class: 'player-orc-m',
    },
  },
  TROLL: {
    name: RaceNames.troll,
    sprite: {
      class: 'player-troll-m',
    },
  },
}