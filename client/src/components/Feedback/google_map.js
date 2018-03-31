import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ marker }) => <div>{ marker }</div>;
class GoogleMap extends Component {
    static defaultProps = {
        center: {
          lat: 41.29584,
          lng: 69.27710
        },
        zoom: 11
      };
    
      render() {
        
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '25rem', maxWidth: '25rem'}} className="googleMap">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyAVEiF0hv0mia_ARcs8Z6dwu7Mv6tONiWM" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={41.29584}
                lng={69.27710}
                marker={<img className="marker" src="https://cdn.filestackcontent.com/I8l02VJbTxOfwkVUU6c9" alt="marker"/>}
              />
            </GoogleMapReact>
          </div>
        );
      }
}

export default GoogleMap;