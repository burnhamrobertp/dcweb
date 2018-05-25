import React from 'react'
import { connect } from 'react-redux'
import TitleScreen from 'scenes/title'
import Game from 'scenes/game'
import { GameState } from './common/enum'

class App extends React.Component {
  render() {
    return <div className="App">
      {this.body}
    </div>
  }

  get body() {
    switch (this.props.gameState) {
      case GameState.NO_GAME:
      case GameState.END:
        return <TitleScreen />
      case GameState.START:
        return <Game />
      default:
        return <div>Invalid GameState: {this.props.gameState}</div>
    }
  }
}

const mapStateToProps = state => ({
  gameState: state.game.state,
})

export default connect(
  mapStateToProps,
  {},
)(App)
