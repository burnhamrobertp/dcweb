import React from 'react'
import { connect } from 'react-redux'

class Tile extends React.Component {
  render() {
    return <div className={this.featureClass}>

    </div>
  }

  get featureClass() {
    let variant = Math.floor(Math.random() * this.props.tile.sprite.variants)
    return `${this.props.tile.sprite.class}${variant}`
  }
}

const mapStateToProps = (state, ownProps) => {
  const branch = state.map.currentBranch,
    depth = state.map.currentDepth;

  return {
    tile: state.map[branch][depth][ownProps.x][ownProps.y]
  }
}

export default connect(
  mapStateToProps
)(Tile)