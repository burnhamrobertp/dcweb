import { generateCreatures } from './creatureMiddleware'
import { checkMapExists, generateMap } from './mapMiddleware'

export default [ checkMapExists, generateMap, generateCreatures ]