import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 0.1769,
      lng: 37.9083
    },
    zoom: 11
  };
  // renderMarkers(map, maps) {
  //   let marker = new maps.Marker({
  //     position: "-1.268665592 36.805996776",
  //     map,
  //     title: "Hello World!"
  //   });
  // }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAaHKeIKU4lQRl_NZKN3jLC4Nv4ChiAmx4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          // onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        >
          <AnyReactComponent lat={-1.28333} lng={36.81667} text={"Nairobi"} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
