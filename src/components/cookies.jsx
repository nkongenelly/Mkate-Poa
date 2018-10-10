import React, { Component } from "react";

class Cookies extends Component {
  state = {
    cookies: [
      {
        id: 1,
        name: "Animated cookies",
        description: "Choose the animated shape for your cookies",
        price: "From ksh.150"
      },
      {
        id: 1,
        name: "Retail Cookies",
        description: "Get more at a lower price",
        price: "From ksh.100"
      },
      {
        id: 1,
        name: "Chocolate chip cookies",
        description: "Get that chocolty feel in any of your favorite cookies",
        price: "From ksh.130"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.cookies.map(cookie => (
          <div id="Pizza" className="w3-container menu w3-padding-32 w3-white">
            <hr />
            <h1>
              <b>{cookie.name}</b>{" "}
              <span className="w3-right w3-tag w3-dark-grey w3-round">
                {cookie.price}
              </span>
            </h1>
            <p className="w3-text-grey">{cookie.description}</p>
            <hr />
            <button
              onClick={() => this.props.onAddCart(this.props.product)}
              className="btn btn-primary m-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Cookies;
