import { MonsterNames } from "../localizations/monsters"
import { Attacks} from "../localizations/actions"

export default {
  RAT: {
    COMMON: {
      name: MonsterNames.rat,
      hp: '1d6',
      attacks: [
        {
          verb: Attacks.bite,
          damage: '1d4',
        }
      ]
    },
    GREY: {
      name: MonsterNames.rat_grey,
      hp: '1d6+6',
      attacks: [
        {
          verb: Attacks.bite,
          damage: '1d4+1',
        }
      ]
    },
    BROWN: {
      name: MonsterNames.rat_brown,
      hp: '4d4+6',
      attacks: [
        {
          verb: Attacks.bite,
          damage: '1d6',
        }
      ]
    },
    GREEN: {
      name: MonsterNames.rat_green,
    }
  },
  OOZE: {
    GREY: {
      name: MonsterNames.ooze,
      hp: '2d6',
      attacks: [
        {
          verb: Attacks.slam,
          damage: '2d4',
        }
      ]
    }
  }
}