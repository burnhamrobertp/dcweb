import React from 'react'
import { connect } from 'react-redux'
import TileRow from './components/TileRow'

class TileMap extends React.Component {
  render() {
    const tiles = this.rows.map(y => <TileRow key={y} y={y} width={this.props.width} />)

    return <div id="game-map">
      {tiles}
    </div>
  }

  get rows() {
    return Array.from(Array(this.props.height).keys())
  }
}

const mapStateToProps = state => ({
  width: state.map.width,
  height: state.map.height,
})

export default connect(
  mapStateToProps,
)(TileMap)