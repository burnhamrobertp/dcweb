import React from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'

class ModalController extends React.Component {
  render() {
    console.log(this.props.modals, this.props.stack)
    const modals = this.props.stack.map(this.renderModal)

    return <div id="modal-controller">
      {modals}
    </div>
  }

  renderModal = id => {
    const { props, content } = this.props.modals[id]
    return <Modal key={id} props={props}>{content}</Modal>
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