import React, { Component } from "react";

class Abouts extends Component {
  state = {
    slideImages: [
      "images/cake1.jpg",
      "images/cake2.jpg",
      "images/cookies1.jpg",
      "images/cookies2.jpg",
      "images/cupcake1.jpg",
      "images/cupcakes2.jpg",
      "images/bread.jpg",
      "images/bread2.jpg",
      "images/baguettes1.jpg",
      "images/baguettes2.jpg"
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div
          class="w3-container w3-padding-64 w3-red w3-grayscale w3-xlarge"
          id="about"
        >
          <div class="w3-content">
            <div className="card-group">
              {this.state.slideImages.map(slideImage => (
                <div className="card">
                  <img
                    className="card-img-top"
                    src={slideImage}
                    alt="Card image cap"
                  />
                </div>
              ))}
            </div>
            <div class="w3-row">
              <div class="w3-col s6">
                <p>Mon & Tue CLOSED</p>
                <p>Wednesday 10.00 - 24.00</p>
                <p>Thursday 10:00 - 24:00</p>
              </div>
              <div class="w3-col s6">
                <p>Friday 10:00 - 12:00</p>
                <p>Saturday 10:00 - 23:00</p>
                <p>Sunday Closed</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Abouts;
