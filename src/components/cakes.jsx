import React, { Component } from "react";

class Cakes extends Component {
  state = {
    cakes: [
      {
        id: 1,
        name: "Birthday Cake",
        description: "Get to specify",
        price: "From ksh.1000"
      },
      {
        id: 1,
        name: "Wedding Cake",
        description: "Get to specify",
        price: "From ksh.2000"
      },
      {
        id: 1,
        name: "Events Cake",
        description: "Get to specify",
        price: "From ksh.1500"
      }
    ]
  };

  render() {
    return (
      // <div
      //   w3-center
      //   w3-border
      //   w3-border-dark-grey
      //   style={{ marginLeft: 150, marginRight: 300 }}
      // >
      <React.Fragment>
        {this.state.cakes.map(cake => (
          <div
            id="Pizza"
            key={cake.id}
            className=" menu w3-border-dark-grey w3-yellow w3-grayscale"
            style={{ marginLeft: 150, marginRight: 300 }}
          >
            <h1 style={{ fontSize: 20 }}>
              <b>{cake.name}</b>{" "}
              <span className="w3-right w3-tag w3-dark-grey w3-round">
                {cake.price}
              </span>
            </h1>
            <p className="w3-text-grey">{cake.description}</p>
            <hr />
          </div>
        ))}
        {/* // </div> */}
      </React.Fragment>
    );
  }
}

export default Cakes;
