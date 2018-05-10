import React from 'react'
import Tile from './Tile'

class TileRow extends React.Component {
  render() {
    const tiles = this.props.tiles.map((tile, x) => <Tile key={x} x={x} y={this.props.y} tile={tile} /> )

    return <div className="map-row">
      {tiles}
    </div>
  }
}

export default TileRow