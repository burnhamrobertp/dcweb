import { MapTiles } from '../../data/map'
import { generateBranchMap, setBranchMap } from '../actions/map'

export const checkMapExists = ({ dispatch, getState }) => next => action => {
  console.log(action.type);
  if (action.type === 'SET_BRANCH') {
    const state = getState()
    const { branch, depth } = action.payload

    if (!state.map[branch] || !state.map[branch][depth]) {
      dispatch(setBranchMap(branch, depth, [[]]))
      dispatch(generateBranchMap(branch, depth))
    }
  }

  return next(action)
}

export const generateMap = ({ dispatch, getState }) => next => action => {
  if (action.type === 'GENERATE_BRANCH_MAP') {
    const state = getState()
    const { branch, depth } = action.payload
    const { width, height } = state.map

    const mapConfig = [
      Array(width).fill(MapTiles.WALL.INDESTRUCTIBLE),
      ...Array(height - 2).fill(
        [
          MapTiles.WALL.INDESTRUCTIBLE,
          ...Array(width - 2).fill(MapTiles.FLOOR.DIRT_GREY),
          MapTiles.WALL.INDESTRUCTIBLE,
        ],
      ),
      Array(width).fill(MapTiles.WALL.INDESTRUCTIBLE),
    ]
    const map = instantiateMap(mapConfig)

    dispatch(setBranchMap(branch, depth, map))
  }

  return next(action)
}

/**
 * Given a map configuration, instantiate each tile
 *
 * This removes any variance data and facilitates pure components
 *
 * @param mapRows array
 * @return array
 */
function instantiateMap(mapRows) {
  return mapRows.map(row => row.map(tileConfig => instantiateTile(tileConfig)))
}

function instantiateTile(tileConfig) {
  const variant = Math.floor(Math.random() * tileConfig.sprite.variants)
  const tileSprite = { sprite: { class: tileConfig.sprite.class + variant } }
  const tile = Object.assign({}, tileConfig, tileSprite)

  delete tile.sprite.variants
  return tile
}