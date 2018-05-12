import { AttackEffectSeverity, AttackEffectType, MapTileType } from './enum'

/**
 *   ##########  ###      ##  ##########  ##########  #########   ##########   ########   ##########  ##########
 *   ##########  ####     ##  ##########  ##########  ##     ###  ##########  ###    ###  ##########  ##########
 *       ##      ## ##    ##      ##      ##          ##     ###  ##          ##      ##  ##          ##
 *       ##      ##  ##   ##      ##      #######     #########   #######     ##########  ##          #######
 *       ##      ##   ##  ##      ##      #######     #######     #######     ##      ##  ##          #######
 *       ##      ##    ## ##      ##      ##          ##   ###    ##          ##      ##  ##          ##
 *   ##########  ##     ####      ##      ##########  ##    ###   ##          ##      ##  ##########  ##########
 *   ##########  ##      ###      ##      ##########  ##     ###  ##          ##      ##  ##########  ##########
 */

export interface IBranch {
  name: string,
  tiles: Dictionary<MapTileType, IMapTileConfig[]>
}

export interface IMapTileConfig {
  name: string,
  sprite: {
    class: string,
    variants: number,
  }
}

export interface IMonsterConfig {
  name: string,
  hp: string,
  attacks: IAttackConfig[],
}

export interface IAttackConfig {
  verb: string,
  damage: string,
  effects?: IAttackEffect[],
}

export interface IAttackEffect {
  type: AttackEffectType,
  severity: AttackEffectSeverity,
  probability: number,
  duration: string,
}

export interface IRace {
  name: string,
  sprite: {
    class: string
  }
}

/**
 *   ##########  ##      ##  #########  ##########
 *   ##########   ##    ##   ###   ###  ##########
 *       ##        ##  ##    ##     ##  ##
 *       ##         ####     #########  #######
 *       ##          ##      ########   #######
 *       ##          ##      ##         ##
 *       ##          ##      ##         ##########
 *       ##          ##      ##         ##########
 */

export type Dictionary<K extends string, T> = {
  [key in K]: T
}

export type DictionaryIndex<K extends string, T> = {
  [key in K]: Dictionary<string, T>
}