import React from 'react'
import './GridSlot.css'

class GridSlot extends React.Component {
  render() {
    return <div className={`grid-slot ${this.featureClass}`}>

    </div>
  }

  get featureClass() {
    let variant = Math.floor(Math.random() * this.props.feature.variants);
    return `${this.props.feature.spriteClass}${variant}`
  }
}

export default GridSlot