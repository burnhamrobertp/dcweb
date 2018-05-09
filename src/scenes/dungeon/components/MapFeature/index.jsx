import React from 'react'

class MapFeature extends React.Component {
  render() {
    return <div className={`map-feature ${this.featureClass}`}>

    </div>
  }

  get featureClass() {
    let variant = Math.floor(Math.random() * this.props.feature.sprite.variants)
    return `${this.props.feature.sprite.class}${variant}`
  }
}

export default MapFeature