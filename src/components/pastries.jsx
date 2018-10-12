import React, { Component } from "react";

class Pastries extends Component {
  state = {
    pastries: [
      {
        id: 1,
        name: "Traditional Favorites",
        description:
          "Hot Apple Dumpling, Apple Crisp, Fruit Cobblers, Caramel Apple Sticks ",
        price: "From ksh.200"
      },
      {
        id: 1,
        name: "Bars",
        description:
          "Fudge Brownies, Lemon Bars, Apple Pie Bars, Salted Caramel Chocolate Chunk Bars ",
        price: "From ksh.180"
      },
      {
        id: 1,
        name: "Muffins",
        description:
          "Blueberry Streusel, Apple Streusel, Pumpkin Nut, Raisin Bran, and seasonal ",
        price: "From ksh.150"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.pastries.map(pastry => (
          <div
            id="Pizza"
            className=" menu w3-border-dark-grey w3-yellow w3-grayscale"
            style={{ marginLeft: 150, marginRight: 300 }}
          >
            <h1 style={{ fontSize: 20 }}>
              <b>{pastry.name}</b>{" "}
              <span class="w3-right w3-tag w3-dark-grey w3-round">
                {pastry.price}
              </span>
            </h1>
            <p class="w3-text-grey">{pastry.description}</p>
            <hr />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Pastries;
