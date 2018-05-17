import React from 'react'

class SimpleSelectMenuOption extends React.Component {
  render() {
    return <li>
      {this.props.option.label}
    </li>
  }
}

export default SimpleSelectMenuOption