import React from 'react'
import SimpleSelectMenu from '../../components/SimpleSelectMenu'

class TitleMenu extends React.Component {
  render() {
    return <SimpleSelectMenu options={this.options} />
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