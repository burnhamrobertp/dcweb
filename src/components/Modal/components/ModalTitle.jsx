import React from 'react'

class ModalTitle extends React.Component {
  render() {
    return <div className='title'>
      {this.props.children.toUpperCase()}
    </div>
  }
}

export default ModalTitle