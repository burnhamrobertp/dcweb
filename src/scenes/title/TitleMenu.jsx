import React from 'react'
import SelectMenu from '../../components/SelectMenu'

class TitleMenu extends React.Component {
  render() {
    return <SelectMenu options={this.options} />
  }

  get options() {
    return [
      {
        label: 'New Game',
      },
      {
        label: 'Continue Game',
        disabled: true,
      },
      {
        label: 'Settings',
      },
      {
        label: 'Report Bug',
      },
    ]
  }
}

export default TitleMenu