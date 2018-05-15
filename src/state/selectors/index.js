import { createSelector } from 'reselect'

const passProps = (state, props) => props
const getCurrentBranch = state => state.map.currentBranch
const getCurrentDepth = state => state.map.currentDepth
const getCreatureFeatures = state => state.map.creatureFeature

export const makeGetTileFeatures = () => {
  return createSelector(
    [passProps, getCurrentBranch, getCurrentDepth, getCreatureFeatures],
    (props, branch, depth, creatureFeatures) => {
      return creatureFeatures[branch][depth][props.x][props.y]
    }
  )
}