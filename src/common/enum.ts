/**
 *   ##########  ###      ##  ##       ##  ####   ####
 *   ##########  ####     ##  ##       ##  ## ## ## ##
 *   ##          ## ##    ##  ##       ##  ##  ###  ##
 *   #######     ##  ##   ##  ##       ##  ##  ###  ##
 *   #######     ##   ##  ##  ##       ##  ##  ###  ##
 *   ##          ##    ## ##  ##       ##  ##  ###  ##
 *   ##########  ##     ####  ###########  ##  ###  ##
 *   ##########  ##      ###  ###########  ##   #   ##
 */

export enum AttackEffectType {
  CONFUSION,
  POISON,
  PARALYSIS
}

export enum AttackEffectSeverity {
  VERY_MINOR,
  MINOR,
  VERY_LOW,
  LOW,
  MODERATE,
  HIGH,
  VERY_HIGH,
  SEVERE,
  VERY_SEVERE,
}

export enum BranchType {
  CAVES = 'CAVES',
}

export enum GameState {
  NO_GAME,
  START,
  END
}

export enum MonsterType {
  RAT = 'RAT',
  OOZE = 'OOZE',
}

export enum MapTileType {
  FLOOR = 'FLOOR',
  WALL = 'WALL',
}

export enum PlayerRaceType {
  DWARF = 'DWARF',
  ELF = 'ELF',
  GNOME = 'GNOME',
  HUMAN = 'HUMAN',
  ORC = 'ORC',
  TROLL = 'TROLL',
}