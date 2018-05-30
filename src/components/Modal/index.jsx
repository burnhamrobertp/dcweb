import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from 'state/actions/modal'
import KeyboundComponent from 'components/KeyboundComponent'
import ModalTitle from '../Modal/components/ModalTitle'

class Modal extends KeyboundComponent {
  constructor(props) {
    super(props)

    this.keybinds = [
      { key: ['esc'], action: this.closeModal }
    ]
  }

  render() {
    const title = this.props.title ? <ModalTitle>{this.props.title}</ModalTitle> : null
    return <div className="modal">
      {title}
      <div className="body">{this.props.children}</div>
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