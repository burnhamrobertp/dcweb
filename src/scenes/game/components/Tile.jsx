import React from 'react'
import { connect } from 'react-redux'
import Feature from './Feature'

class Tile extends React.Component {
  render() {
    const features = this.props.features.map((feature, i) => <Feature key={i} feature={feature} />)
    return <div className={this.props.tile.sprite.class}>
      {features}
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  let features = [];
  if (state.player.x === ownProps.x && state.player.y === ownProps.y) {
    features.push(state.player)
  }

  return {
    features,
  }
}

export default connect(
  mapStateToProps
)(Tile)