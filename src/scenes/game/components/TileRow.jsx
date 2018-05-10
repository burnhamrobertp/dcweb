import React from 'react'
import Tile from './Tile'

class TileRow extends React.Component {
  render() {
    const tiles = this.rowTiles.map(x => <Tile x={x} y={this.props.y} /> )

    return <div className="map-row">
      {tiles}
    </div>
  }

  get rowTiles() {
    return Array.from(Array(this.props.width).keys())
  }
}

export default TileRow