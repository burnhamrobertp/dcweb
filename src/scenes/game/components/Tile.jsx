import React from 'react'
import { connect } from 'react-redux'
import Feature from './Feature'
import { getTileFeatures, makeGetTileFeatures } from '../../../state/selectors'

class Tile extends React.Component {
  render() {
    console.log(this.props.x, this.props.y)
    const features = this.props.features.map((feature, i) => <Feature key={i} feature={feature} />)
    return <div className={this.props.tile.sprite.class}>
      {features}
    </div>
  }
}

const makeMapStateToProps = () => {
  const getTileFeatures = makeGetTileFeatures()

  return (state, props) => ({
    features: getTileFeatures(state, { x: props.x, y: props.y }),
  })
}

export default connect(
  makeMapStateToProps,
)(Tile)