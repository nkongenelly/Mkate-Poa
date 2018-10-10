import React, { Component } from "react";
import { Zoom } from "react-slideshow-image";
// import slideImage from "images/screen1.jpg";

// console.log(<img src="images/screen1.jpg" />);

class Slideshows extends Component {
  state = {
    slideImages: [
      "images/screen1.jpg",
      "images/screen2.jpg",
      "images/screen3.jpg",
      "images/screen4.jpg",
      "images/screen5.jpg"
    ],

    zoomproperties: {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      scale: 0.4,
      arrows: true
    },
    properties: {
      // duration: 5000,
      // transitionDuration: 500,
      // infinite: true,
      // indicators: true,
      // arrows: true
    },

    stylying: {
      // backgroundSize: "100%",
      width: "100%",
      height: 400
    }
  };
  render() {
    return (
      <div>
        <Zoom {...this.state.zoomproperties}>
          {this.state.slideImages.map((slideImage, index) => (
            <div className="each-slide">
              {/* <div> */}
              {/* /* // key=
                {index}
                // style=
                {{ backgroundImage: `url(${slideImage})` }} */}
              <img
                style={this.state.stylying}
                key={index}
                src={slideImage}
                alt=""
              />

              <span>Slide {index}</span>
              {/* </div> */}
            </div>
          ))}
        </Zoom>
      </div>
    );
  }
}

export default Slideshows;
