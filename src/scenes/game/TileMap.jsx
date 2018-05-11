import React from 'react'
import { connect } from 'react-redux'
import TileRow from './components/TileRow'

class TileMap extends React.Component {
  render() {
    const tiles = this.props.map.map(TileMap.renderRow)

    return <div id="game-map">
      {tiles}
    </div>
  }

  static renderRow(tiles, yIndex) {
    return <TileRow key={yIndex} y={yIndex} tiles={tiles} />
  }
}

const mapStateToProps = state => ({
  width: state.map.width,
  height: state.map.height,
  map: state.map[state.map.currentBranch][state.map.currentDepth],
})

export default connect(
  mapStateToProps,
)(TileMap)