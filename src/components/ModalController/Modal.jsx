import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from 'state/actions/modal'
import KeyboundComponent from 'components/KeyboundComponent'

class Modal extends KeyboundComponent {
  constructor(props) {
    super(props)

    this.keybinds = [
      { key: ['esc'], action: this.props.closeModal }
    ]
  }

  render() {
    return <div>
      its a Modal
    </div>
  }

  closeModal = () => {
    this.props.closeModal(this.props.id)
  }
}

const mapDispatchToProps = dispatch => ({
  closeModal: id => dispatch(closeModal(id)),
})

export default connect(
  null,
  mapDispatchToProps,
)(Modal)