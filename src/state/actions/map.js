import { createAction } from 'redux-actions'

/**
 * Given a map configuration, instantiate each tile
 *
 * This removes any variance data and facilitates pure components
 *
 * @param mapRows array
 * @return array
 */
export function instantiateMap(mapRows) {
  return mapRows.map(row => row.map(tileConfig => instantiateTile(tileConfig)))
}

function instantiateTile(tileConfig) {
  const variant = Math.floor(Math.random() * tileConfig.sprite.variants)
  const tileSprite = { sprite: { class: tileConfig.sprite.class + variant }}
  const tile = Object.assign({}, tileConfig, tileSprite)

  delete tile.sprite.variants
  return tile
}