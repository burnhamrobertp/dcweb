import React from 'react'
import classNames from 'classnames'

class SelectMenuOption extends React.Component {
  render() {
    const classes = classNames({
      selected: this.props.selected,
      disabled: this.props.option.disabled,
    })

    return <li className={classes}>
      {this.props.option.label}
    </li>
  }
}

export default SelectMenuOption