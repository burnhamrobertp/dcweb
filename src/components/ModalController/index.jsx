import React from 'react'
import { connect } from 'react-redux'
import Modal from 'components/Modal'

class ModalController extends React.Component {
  render() {
    const modals = this.props.stack.map(this.renderModal)

    return <div id="modal-controller">
      {modals}
    </div>
  }

  renderModal = id => {
    const { props, content } = this.props.modals[id]
    return <Modal key={id} { ...props }>{content}</Modal>
  }
}

const mapStateToProps = state => ({
  modals: state.modal.index,
  stack: state.modal.stack,
})

export default connect(
  mapStateToProps,
  {}
)(ModalController)