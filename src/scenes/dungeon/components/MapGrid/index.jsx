import React from 'react'
import MapFeature from "../MapFeature";

class MapGrid extends React.Component {
  render() {
    const map = this.props.map.map.map(
      row => (
        <div id="map-row">
          { row.map(feature => <MapFeature feature={feature} /> ) }
        </div>
      )
    );

    return <div className="map-grid">
      { map }
    </div>
  }
}

export default MapGrid