import React from 'react'
import './index.css'
import DungeonMap from './DungeonMap'

class Dungeon extends React.Component {
  render() {
    return <div id="dungeon">
      <DungeonMap />
    </div>
  }
}

export default Dungeon;