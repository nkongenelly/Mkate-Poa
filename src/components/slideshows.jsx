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
              <div
                key={index}
                style={{
                  backgroundImage: `url(${slideImage})`,
                  backgroundSize: "cover",
                  height: "500px",
                  width: "1400px"
                }}
              >
                {/* <img
                style={{
                  backgroundRepeat: no - repeat,
                  backgroundSize: cover,
                  minHeight: "90%"
                }}
                // style={this.state.stylying}
                key={index}
                src={slideImage}
                alt=""
              /> */}
                <span>Slide {index}</span>
              </div>
            </div>
          ))}
        </Zoom>
        <div className="bgimg w3-display-container w3-grayscale-min" id="home">
          <div className="w3-display-bottomleft w3-padding">
            <span className="w3-tag w3-xlarge">Open from 10am to 10pm</span>
          </div>
          <div className="w3-display-middle w3-center">
            {/* <span
              className="w3-text-white w3-hide-small"
              style={{ fontSize: 40 }}
            >
              MKATE POA
              <br />
              Absolutely the best!!
            </span> */}
            {/* <span
              className="w3-text-white w3-hide-large w3-hide-medium"
              style={{ fontSize: 30 }}
            >
              <b>
                thin
                <br />
                CRUST PIZZA
              </b>
            </span> */}
            <p>
              <a href="#menu" className="w3-button w3-xxlarge w3-black">
                Let me see the menu
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshows;
