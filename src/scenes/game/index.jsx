import React from 'react'
import { connect } from 'react-redux'
import { onMount, onUnmount } from 'react-keydown/dist/event_handlers'
import { setBinding } from 'react-keydown/dist/store'
import TileMap from './TileMap'
import MessageLog from './MessageLog'
import SideBar from './SideBar'
import * as PlayerActions from 'actions/player'

class Game extends React.Component {
  componentDidMount() {
    onMount(this);
  }

  componentWillUnmount() {
    onUnmount(this);
  }

  render() {
    return <div id="game">
      <TileMap />
      <SideBar />
      <MessageLog />
    </div>
  }

  playerUp() {
    this.props.playerUp()
  }

  playerUpLeft() {
    this.props.playerUpLeft()
  }

  playerUpRight() {
    this.props.playerUpRight()
  }

  playerLeft() {
    this.props.playerLeft()
  }

  playerRight() {
    this.props.playerRight()
  }

  playerDown() {
    this.props.playerDown()
  }

  playerDownLeft() {
    this.props.playerDownLeft()
  }

  playerDownRight() {
    this.props.playerDownRight()
  }
}

// Establish keybindings at global level
[
  { keys: ['k'], fn: Game.prototype.playerUp },
  { keys: ['y'], fn: Game.prototype.playerUpLeft },
  { keys: ['u'], fn: Game.prototype.playerUpRight },
  { keys: ['h'], fn: Game.prototype.playerLeft },
  { keys: ['l'], fn: Game.prototype.playerRight },
  { keys: ['j'], fn: Game.prototype.playerDown },
  { keys: ['b'], fn: Game.prototype.playerDownLeft },
  { keys: ['n'], fn: Game.prototype.playerDownRight },
].forEach(
  binding => setBinding({ target: Game.prototype, fn: binding.fn, keys: binding.keys })
)

const mapDispatchToProps = dispatch => ({
  playerUp: () => dispatch(PlayerActions.actionDirection(0, -1)),
  playerUpLeft: () => dispatch(PlayerActions.actionDirection(-1, -1)),
  playerUpRight: () => dispatch(PlayerActions.actionDirection(1, -1)),
  playerLeft: () => dispatch(PlayerActions.actionDirection(-1, 0)),
  playerRight: () => dispatch(PlayerActions.actionDirection(1, 0)),
  playerDown: () => dispatch(PlayerActions.actionDirection(0, 1)),
  playerDownLeft: () => dispatch(PlayerActions.actionDirection(-1, 1)),
  playerDownRight: () => dispatch(PlayerActions.actionDirection(1, 1)),
})

export default connect(
  null,
  mapDispatchToProps,
)(Game)