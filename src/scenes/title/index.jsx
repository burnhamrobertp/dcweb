import React from 'react'
import Logo from './Logo'
import TitleMenu from './TitleMenu'

class TitleScreen extends React.Component {
  render() {
    return <div id="title">
      <Logo />
      <TitleMenu />
    </div>
  }
}

export default TitleScreen