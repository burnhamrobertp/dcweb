import React from 'react'
import TileMap from './TileMap'
import MessageLog from './MessageLog'
import SideBar from './SideBar'

class Game extends React.Component {
  render() {
    return <div id="dungeon">
      <TileMap />
      <SideBar />
      <MessageLog />
    </div>
  }
}

export default Game