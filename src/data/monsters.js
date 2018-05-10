import { MonsterNames } from '../localizations/creatures'
import { AttackVerbs } from '../localizations/actions'

export const Monsters = {
  RAT: {
    COMMON: {
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