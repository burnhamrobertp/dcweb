import React from 'react'
import MapGrid from './components/MapGrid'
import { MapTiles } from '../../data/map'

class TileMap extends React.Component {
  render() {
    return <div id="dungeon-map">
      <MapGrid map={this.map} />
    </div>
  }

  get map() {
    let width = 15,
      height = 15
    return {
      width: width,
      height: height,
      playerPosition: [1, 1],
      map: [
        Array(width).fill(MapTiles.WALL.INDESTRUCTIBLE),
        ...Array(height - 2).fill(
          [
            MapTiles.WALL.INDESTRUCTIBLE,
            ...Array(width - 2).fill(MapTiles.FLOOR.DIRT_GREY),
            MapTiles.WALL.INDESTRUCTIBLE,
          ],
        ),
        Array(width).fill(MapTiles.WALL.INDESTRUCTIBLE),
      ],
    }
  }
}

export default TileMap