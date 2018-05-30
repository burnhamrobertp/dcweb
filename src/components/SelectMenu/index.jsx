import React from 'react'
import SelectMenuOption from './components/SelectMenuOption'
import KeyboundComponent from '../KeyboundComponent'

class SelectMenu extends KeyboundComponent {
  constructor(props) {
    super(props)

    this.state = { selected: 0 }
    this.scope = props.scope
    this.keybinds = [
      { key: ['j', 'down'], action: this.moveSelectDown },
      { key: ['k', 'up'], action: this.moveSelectUp },
      { key: ['enter', 'space'], action: this.selectOption },
    ]
  }

  moveSelectUp = () => {
    const optionsLength = this.props.options.length
    let selected = this.state.selected

    // Skip disabled options
    do {
      selected = (selected + optionsLength - 1) % optionsLength
    } while(this.props.options[selected].disabled)

    this.setState({ selected })
  }

  moveSelectDown = () => {
    let selected = this.state.selected

    // Skip disabled options
    do {
      selected = (selected + 1) % this.props.options.length
    } while(this.props.options[selected].disabled)
    this.setState({ selected })
  }

  selectOption = () => {
    this.props.options[this.state.selected].action()
  }

  render() {
    const options = this.props.options.map(this.renderOption)

    return <ul className="game-select-menu">
      {options}
    </ul>
  }

  renderOption = (option, key) => {
    const selected = this.state.selected === key
    return <SelectMenuOption key={key} option={option} selected={selected} />
  }
}

export default SelectMenu