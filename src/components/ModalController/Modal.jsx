import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from 'state/actions/modal'
import KeyboundComponent from 'components/KeyboundComponent'

class Modal extends KeyboundComponent {
  constructor(props) {
    super(props)

    this.scope = props.id
    this.keybinds = [
      { key: ['esc'], action: this.closeModal }
    ]
  }

  render() {
    return <div className="modal">
      {this.props.children}
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