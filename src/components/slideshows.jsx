import React, { Component } from "react";
import About from "./abouts";
import { Zoom } from "react-slideshow-image";
// import slideImage from "images/screen1.jpg";

// console.log(<img src="images/screen1.jpg" />);

class Slideshows extends Component {
  state = {
    slideImages: [
      "images/screen6.jpg",
      "images/screen7.jpg",
      "images/screen8.jpg",
      "images/screen9.jpg",
      "images/screen10.jpg"
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
            <div className="each-slide" id="home">
              <div
                key={index}
                style={{
                  backgroundImage: `url(${slideImage})`,
                  backgroundSize: "cover",
                  height: "600px",
                  width: "1400px",
                  alignItems: "bottom"
                }}
              >
                {/* <span>Slide {index}</span> */}

                {/* <div
                  className="bgimg w3-display-container w3-grayscale-min"
                  id="home"
                > */}
                <div
                  className="w3-display-bottomleft w3-padding"
                  style={{ align: "bottom" }}
                >
                  <span className="w3-tag w3-xlarge">
                    Open from 10am to 10pm
                  </span>
                </div>
                <div className="w3-display-bottomright w3-center">
                  <span
                    className="w3-text-white w3-hide-large w3-hide-medium"
                    style={{ fontSize: "40px" }}
                  >
                    <b />
                    <br />
                    Mkate Poa
                    <b />
                  </span>
                  <p>
                    <a
                      href="#menu"
                      className="w3-button w3-xxlarge w3-black w3-display-bottom"
                    >
                      Our menu
                    </a>
                  </p>
                </div>
              </div>
            </div>
            // </div>
          ))}
        </Zoom>
      </div>
    );
  }
}

export default Slideshows;
