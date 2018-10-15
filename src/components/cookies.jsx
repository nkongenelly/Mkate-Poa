import React, { Component } from "react";

class Cookies extends Component {
  state = {
    cookies: [
      {
        id: 1,
        name: "Animated cookies",
        description: "Choose the animated shape for your cookies",
        range: "From ksh.",
        price: "150"
      },
      {
        id: 2,
        name: "Retail Cookies",
        description: "Get more at a lower price",
        range: "From ksh.",
        price: "100"
      },
      {
        id: 3,
        name: "Chocolate chip cookies",
        description: "Get that chocolty feel in any of your favorite cookies",
        range: "From ksh.",
        price: "130"
      }
    ],
    counters: [],
    show: false
  };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  showHideClassName(show) {
    console.log(show);
    return show === true ? "display-block" : "display-none";
  }
  onAddCart = cookie => {
    var counters = [...this.state.counters];
    var index = 0;
    console.log(cookie);

    // if (counters.length != 0) {
    var found = counters.some(el => el.id === cookie.id);

    console.log(found);
    if (!found) {
      var toPush = {
        id: cookie.id,
        name: cookie.name,
        description: cookie.description,
        price: cookie.price,
        range: cookie.range,
        value: 1
      };
      counters.push(toPush);
      this.setState({ counters });
      console.log(counters);
    }
  };
  onDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  onIncrement = counter => {
    const counters = [...this.state.counters]; //3 dots means clone the object
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
    console.log(counters[index].value);
  };

  onDecrease = counter => {
    const counters = [...this.state.counters]; //3 dots means clone the object
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.showModal}
          className="btn btn-primary m-2 w3-right"
          data-target="#counter"
        >
          Shopping Basket
        </button>
        <div className={this.showHideClassName(this.state.show)}>
          <section className="modal-main">
            {this.state.counters.map(counter => (
              <div key={counter.id}>
                <span className="m-2">{counter.name}</span>
                <span className={this.getBadgeClasses(counter.value)}>
                  {this.formatCount(counter.value)}
                </span>
                <span className="m-2">{counter.price}</span>
                <span className="m-2">
                  {counter.price * this.formatCount(counter.value)}
                </span>
                <button
                  onClick={() => this.onIncrement(counter)}
                  className="btn btn-secondary btn-sm m-2"
                >
                  +
                </button>
                <button
                  onClick={() => this.onDecrease(counter)}
                  className="btn btn-primary btn-sm m-2"
                >
                  -
                </button>
                <button
                  onClick={() => {
                    this.onDelete(counter.id);
                  }}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              type="button"
              onclick={this.hideModal}
              className={this.showHideClassName(this.state.show)}
            >
              close
            </button>
          </section>
        </div>

        {/* </div> */}

        {this.state.cookies.map(cookie => (
          <div
            id="Pizza"
            key={cookie.id}
            className=" menu w3-border-dark-grey w3-yellow w3-grayscale"
            style={{ marginLeft: 150, marginRight: 300 }}
          >
            <h1 style={{ fontSize: 20 }}>
              <b>{cookie.name}</b>{" "}
              <button
                onClick={() => this.onAddCart(cookie)}
                className="btn btn-primary m-2 w3-right"
                data-target="#counter"
              >
                Order
              </button>
              <span className="w3-right w3-tag w3-dark-grey w3-round">
                {cookie.range}
                {cookie.price}
              </span>
            </h1>
            <p className="w3-text-grey">{cookie.description}</p>
            <hr />
          </div>
        ))}
      </React.Fragment>
    );
  }
  formatCount(value) {
    return value === 0 ? "Zero" : value;
  }
  getBadgeClasses(value) {
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Cookies;
