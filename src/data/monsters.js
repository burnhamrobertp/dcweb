import { LocalizedMonsterNames } from "../localizations/monsters"
import { LocalizedAttacks } from "../localizations/actions"

export const Monsters = {
  RAT: {
    COMMON: {
      name: LocalizedMonsterNames.rat,
      hp: '1d6',
      LocalizedAttacks: [
        {
          verb: LocalizedAttacks.bite,
          damage: '1d4',
        }
      ]
    },
    GREY: {
      name: LocalizedMonsterNames.rat_grey,
      hp: '1d6+6',
      LocalizedAttacks: [
        {
          verb: LocalizedAttacks.bite,
          damage: '1d4+1',
        }
      ]
    },
    BROWN: {
      name: LocalizedMonsterNames.rat_brown,
      hp: '4d4+6',
      LocalizedAttacks: [
        {
          verb: LocalizedAttacks.bite,
          damage: '1d6',
        }
      ]
    },
    GREEN: {
      name: LocalizedMonsterNames.rat_green,
    }
  },
  OOZE: {
    GREY: {
      name: LocalizedMonsterNames.ooze,
      hp: '2d6',
      LocalizedAttacks: [
        {
          verb: LocalizedAttacks.slam,
          damage: '2d4',
        }
      ]
    }
  }
};