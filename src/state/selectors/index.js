import { createSelector } from 'reselect'

const passProps = (state, props) => props
const getPlayerFeature = state => state.player

export const makeGetTileFeatures = () => {
  return createSelector(
    [passProps, getPlayerFeature],
    (props, player) => {
      if (player.x === props.x && player.y === props.y) {
        return [player];
      } else {
        return []
      }
    }
  )
}