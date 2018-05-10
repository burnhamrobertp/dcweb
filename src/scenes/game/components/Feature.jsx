import React from 'react'

class Feature extends React.Component {
  render() {
    return <div className={`feature ${this.featureClass}`}>

    </div>
  }

  get featureClass() {
    return this.props.feature.race.sprite.class
  }
}

export default Feature