import { MonsterNames } from '../localizations/creatures'
import { AttackVerbs } from '../localizations/actions'
import { DictionaryIndex, IMonsterConfig } from '../common/types'
import { AttackEffectSeverity, AttackEffectType, MonsterType } from '../common/enum'

export const MonsterConfig: DictionaryIndex<MonsterType, IMonsterConfig> = {
  RAT: {
    WHITE: {
      name: MonsterNames.rat,
      hp: '1d6',
      attacks: [
        {
          verb: AttackVerbs.bite,
          damage: '1d4',
        },
      ],
    },
    GREY: {
      name: MonsterNames.rat_grey,
      hp: '1d6+6',
      attacks: [
        {
          verb: AttackVerbs.bite,
          damage: '1d4+1',
        },
      ],
    },
    BROWN: {
      name: MonsterNames.rat_brown,
      hp: '4d4+6',
      attacks: [
        {
          verb: AttackVerbs.bite,
          damage: '1d6',
        },
      ],
    },
    GREEN: {
      name: MonsterNames.rat_green,
      hp: '2d6+6',
      attacks: [
        {
          verb: AttackVerbs.bite,
          damage: '1d6',
          effects: [
            {
              type: AttackEffectType.POISON,
              severity: AttackEffectSeverity.VERY_MINOR,
              probability: 1,
              duration: '1d4'
            }
          ]
        }
      ]
    },
  },
  OOZE: {
    GREY: {
      name: MonsterNames.ooze,
      hp: '2d6',
      attacks: [
        {
          verb: AttackVerbs.slam,
          damage: '2d4',
        },
      ],
    },
  },
}