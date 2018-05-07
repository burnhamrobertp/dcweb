import React from 'react'

class MessageLog extends React.Component {
  render() {
    return <div id="message-log">
      <div>Some Message</div>
      <div>Another Message</div>
      <div>Several Messages</div>
      <div>Off screen yet?</div>
      <div>Nearly or probably</div>
      <div>A message that definitely shouldn't be visible no matter what you do at least the latter part of this should be hidden.</div>
    </div>
  }
}

export default MessageLog