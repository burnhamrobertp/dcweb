import React from 'react'
import MapGrid from './components/MapGrid'
import {DungeonFeatures} from '../../data/dungeon'

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
        Array(width).fill(DungeonFeatures.WALL.INDESTRUCTIBLE),
        ...Array(height - 2).fill(
          [
            DungeonFeatures.WALL.INDESTRUCTIBLE,
            ...Array(width - 2).fill(DungeonFeatures.FLOOR.DIRT_GREY),
            DungeonFeatures.WALL.INDESTRUCTIBLE,
          ],
        ),
        Array(width).fill(DungeonFeatures.WALL.INDESTRUCTIBLE),
      ],
    }
  }
}

export default TileMap