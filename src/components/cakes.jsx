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
  onAddCart = menu => {
    console.log(menu);
    // if (menu == this.props.cake) {
    // }
    var counters = [...this.state.counters];
    var index = 0;
    var toPush = {
      id: menu.id,
      menuName: menu.menuName,
      menuPrice: menu.menuPrice,
      value: 1
    };
  };
  render() {
    return (
      <React.Fragment>
        {this.state.cakes.map(cake => (
          <div
            id="Pizza"
            key={cake.id}
            className="w3-container menu w3-padding-32 w3-white"
          >
            <hr />
            <h1>
              <b>{cake.name}</b>{" "}
              <span className="w3-right w3-tag w3-dark-grey w3-round">
                {cake.price}
              </span>
            </h1>
            <button
              // onClick={() => this.state.onAddCart(cake)}
              className="btn btn-primary m-2"
            >
              Add to Cart
            </button>
            <p className="w3-text-grey">{cake.description}</p>
            <hr />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Cakes;
