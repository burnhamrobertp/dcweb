import React from 'react'
import DungeonMap from './DungeonMap'
import MessageLog from "./MessageLog";
import SideBar from "./SideBar";

class Dungeon extends React.Component {
  render() {
    return <div id="dungeon">
      <DungeonMap />
      <SideBar/>
      <MessageLog/>
    </div>
  }
}

export default Dungeon;