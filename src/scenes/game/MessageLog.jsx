import React from 'react'
import { connect } from 'react-redux'

export class MessageLog extends React.Component {
  render() {
    const messages = this.props.messages.map((message, index) => <div key={index}>{message}</div>)

    return <div id="message-log">
      {messages}
    </div>
  }
}

const mapStateToProps = state => ({
  messages: state.message.list
})

export default connect(
  mapStateToProps
)(MessageLog)