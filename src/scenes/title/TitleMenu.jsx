import React from 'react'
import { connect } from 'react-redux'
import SelectMenu from 'components/SelectMenu'
import { startGame } from 'state/actions/game'

class TitleMenu extends React.Component {
  render() {
    return <SelectMenu options={this.options} scope='titleMenu' />
  }

  get options() {
    return [
      {
        label: 'New Game',
        action: this.props.startGame,
      },
      {
        label: 'Continue Game',
        disabled: true,
      },
      {
        label: 'Settings',
      },
      {
        label: 'Report Bug',
      },
    ]
  }
}

const mapStateToProps = state => ({ map: state.map})

export default connect(
  mapStateToProps,
  { startGame },
)(TitleMenu)