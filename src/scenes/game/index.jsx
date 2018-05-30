import React from 'react'
import { connect } from 'react-redux'
import Uuidv1 from 'uuid/v1'
import KeyboundComponent from 'components/KeyboundComponent'
import MessageLog from './MessageLog'
import SideBar from './SideBar'
import TileMap from './TileMap'
import * as PlayerActions from 'state/actions/player'
import { openModal } from 'state/actions/modal'

class Game extends KeyboundComponent {
  constructor(props) {
    super(props)

    this.keybinds = [
      { key: ['k'], action: this.props.playerUp },
      { key: ['y'], action: this.props.playerUpLeft },
      { key: ['u'], action: this.props.playerUpRight },
      { key: ['h'], action: this.props.playerLeft },
      { key: ['l'], action: this.props.playerRight },
      { key: ['j'], action: this.props.playerDown },
      { key: ['b'], action: this.props.playerDownLeft },
      { key: ['n'], action: this.props.playerDownRight },
      { key: ['esc'], action: this.openPrimaryMenu },
    ]
  }

  render() {
    return <div id="game">
      <TileMap />
      <SideBar />
      <MessageLog />
    </div>
  }

  openPrimaryMenu = () => {
    const modalId = Uuidv1()

    this.props.openModal(modalId, {}, 'myModal')
  }
}

const mapDispatchToProps = dispatch => ({
  playerUp: () => dispatch(PlayerActions.actionDirection(0, -1)),
  playerUpLeft: () => dispatch(PlayerActions.actionDirection(-1, -1)),
  playerUpRight: () => dispatch(PlayerActions.actionDirection(1, -1)),
  playerLeft: () => dispatch(PlayerActions.actionDirection(-1, 0)),
  playerRight: () => dispatch(PlayerActions.actionDirection(1, 0)),
  playerDown: () => dispatch(PlayerActions.actionDirection(0, 1)),
  playerDownLeft: () => dispatch(PlayerActions.actionDirection(-1, 1)),
  playerDownRight: () => dispatch(PlayerActions.actionDirection(1, 1)),
  openModal: (id, props, content) => dispatch(openModal(id, props, content)),
})

export default connect(
  null,
  mapDispatchToProps,
)(Game)