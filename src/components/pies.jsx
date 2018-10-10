import React, { Component } from "react";

class Pies extends Component {
  state = {
    pies: [
      {
        id: 1,
        name: "Vegan Pies",
        description: "Enjoy great taste with packed nutrition",
        price: "From ksh.600"
      },
      {
        id: 1,
        name: "Apple Pies",
        description:
          "—Fresh apples mixed with a blend of cin- namon, butter and brown sugar in our flaky crust ",
        price: "From ksh.500"
      },
      {
        id: 1,
        name: "Cherry Pie",
        description: "Tart red cherries baked in our flaky crust ",
        price: "From ksh.500"
      },
      {
        id: 1,
        name: "Pecan Pie",
        description:
          "Our pecan pie filling recipe in our flaky crust. (Seasonal) ",
        price: "From ksh.500"
      },
      {
        id: 1,
        name: "Coconut Cream Pie",
        description:
          "—Our delightful vanilla and coconut custard in our flaky crust topped with whipped cream and toasted coconut ",
        price: "From ksh.500"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.pies.map(pie => (
          <div id="Pizza" className="w3-container menu w3-padding-32 w3-white">
            <hr />
            <h1>
              <b>{pie.name}</b>{" "}
              <span class="w3-right w3-tag w3-dark-grey w3-round">
                {pie.price}
              </span>
            </h1>
            <p class="w3-text-grey">{pie.description}</p>
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

export default Pies;
