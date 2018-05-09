import React from 'react'
import { connect } from 'react-redux'

class MessageLog extends React.Component {
  render() {
    const messages = this.props.messages.map(message => <div>{message}</div>)

    return <div id="message-log">
      {messages}
    </div>
  }
}

const mapStateToProps = state => ({
  messages: state.messages.list
})

export default connect(
  mapStateToProps
)(MessageLog)