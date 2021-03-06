import React, { Component } from "react";

class Breads extends Component {
  state = {
    breads: [
      {
        id: 1,
        name: "Fruit Bread",
        description: "Banana Walnut Bread, Apple Pecan Bread",
        price: "From ksh.150"
      },
      {
        id: 1,
        name: "Sweet Bread",
        description:
          "Cinnamon Pecan bread, Sour Cream Coffee bread, Cinnamon Roll bread",
        price: "From ksh.100"
      },
      {
        id: 1,
        name: "Healthy Bread",
        description: "Whole wheat bread, Brown bread",
        price: "From ksh.100"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.breads.map(bread => (
          <div
            id="Pizza"
            className="menu w3-border-dark-grey w3-yellow w3-grayscale"
            style={{ marginLeft: 150, marginRight: 300 }}
          >
            <h1 style={{ fontSize: 20 }}>
              <b>{bread.name}</b>{" "}
              <span className="w3-right w3-tag w3-dark-grey w3-round">
                {" "}
                {bread.price}
              </span>
            </h1>
            <p className="w3-text-grey">{bread.description}</p>
            <hr />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Breads;
