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
      "images/baguettes2.jpg",

      ,
    ]
  };
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default Abouts;
