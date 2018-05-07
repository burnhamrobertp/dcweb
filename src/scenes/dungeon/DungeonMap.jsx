import React from 'react'
import MapGrid from './components/MapGrid'
import {DungeonFeatures} from "../../data/dungeon";

class DungeonMap extends React.Component {
  render() {
    return <div id="dungeon-map">
      <MapGrid map={this.map} />
    </div>
  }

  get map() {
    return {
      width: 15,
      height: 15,
      playerPosition: [1, 1],
      map: [
        Array(15).fill(DungeonFeatures.WALL.INDESTRUCTIBLE),
        [
          DungeonFeatures.WALL.INDESTRUCTIBLE,
          ...Array(13).fill(DungeonFeatures.FLOOR.DIRT_GREY),
          DungeonFeatures.WALL.INDESTRUCTIBLE
        ],
        Array(15).fill(DungeonFeatures.WALL.INDESTRUCTIBLE)
      ]
    }
  }
}

export default DungeonMap