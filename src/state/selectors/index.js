import { createSelector } from 'reselect'

const passProps = (state, props) => props
const getCurrentBranch = state => state.map.currentBranch
const getCurrentDepth = state => state.map.currentDepth
const getCreatureFeatures = state => state.creatureFeature

export const makeGetTileFeatures = () => {
  return createSelector(
    [passProps, getCurrentBranch, getCurrentDepth, getCreatureFeatures],
    (props, branch, depth, creatureFeatures) => {
      const row = creatureFeatures[branch][depth][props.x]
      return row ? row[props.y] : []
    }
  )
}