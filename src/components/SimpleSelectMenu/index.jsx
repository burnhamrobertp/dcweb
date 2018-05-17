import React from 'react'
import SimpleSelectMenuOption from './components/SimpleSelectMenuOption'

class SimpleSelectMenu extends React.Component {
  render() {
    const options = this.props.options.map(
      (option, i) => <SimpleSelectMenuOption key={i} option={option} />
    )

    return <ul className="menu">
      {options}
    </ul>
  }
}

export default SimpleSelectMenu