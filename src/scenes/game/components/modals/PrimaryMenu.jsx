import React from 'react'
import { connect } from 'react-redux'
import SelectMenu from 'components/SelectMenu'
import { endGame } from 'state/actions/game'

class PrimaryMenu extends React.Component {
  render() {
    return <SelectMenu options={this.options} />
  }

  get options() {
    return [
      {
        label: 'Quit Game',
        action: this.props.endGame,
      },
    ]
  }
}

const mapDispatchToProps = dispatch => ({
  endGame: () => dispatch(endGame()),
})

export default connect(
  null,
  mapDispatchToProps,
)(PrimaryMenu)