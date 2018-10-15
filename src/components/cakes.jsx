import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";
class Cakes extends Component {
  state = {
    cakes: [
      {
        id: 1,
        name: "Birthday Cake",
        description: "Get to specify",
        range: "From ksh.",
        price: "1000"
      },
      {
        id: 2,
        name: "Wedding Cake",
        description: "Get to specify",
        range: "From ksh.",
        price: "2000"
      },
      {
        id: 3,
        name: "Events Cake",
        description: "Get to specify",
        range: "From ksh.",
        price: "1500"
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
  onAddCart = cake => {
    var counters = [...this.state.counters];
    var index = 0;
    console.log(cake);

    // if (counters.length != 0) {
    var found = counters.some(el => el.id === cake.id);

    // console.log(found);
    if (!found) {
      var toPush = {
        id: cake.id,
        name: cake.name,
        description: cake.description,
        price: cake.price,
        range: cake.range,
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
      // <div
      //   w3-center
      //   w3-border
      //   w3-border-dark-grey
      //   style={{ marginLeft: 150, marginRight: 300 }}
      // >
      <React.Fragment>
        {/* <div className="row"> */}
        {/* {this.state.counters.map(counter => (
          <Counter
            counters={this.state.counters}
            counter={counter}
            onAddCart={this.onAddCart}
            onDelete={this.onDelete}
            onIncrement={this.onIncrement}
            onDecrease={this.onDecrease}
            formatCount={this.formatCount}
            getBadgeClasses={this.getBadgeClasses}
          />
        ))} */}
        {/* <Counter show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Counter> */}

        <button
          onClick={this.showModal}
          className="btn btn-primary m-2 w3-right"
          data-target="#counter"
        >
          Shopping Basket
        </button>
        <div className={this.showHideClassName(this.state.show)}>
          <section className="modal-main">
            {/* <div className="modal-dialog" role="document"> */}
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
            {/* </div> */}
          </section>
        </div>

        {/* </div> */}

        {this.state.cakes.map(cake => (
          <div
            id="Pizza"
            key={cake.id}
            className=" menu w3-border-dark-grey w3-yellow w3-grayscale"
            style={{ marginLeft: 150, marginRight: 300 }}
          >
            <h1 style={{ fontSize: 20 }}>
              <b>{cake.name}</b>{" "}
              <button
                onClick={() => this.onAddCart(cake)}
                className="btn btn-primary m-2 w3-right"
                data-target="#counter"
              >
                Order
              </button>
              <span className="w3-right w3-tag w3-dark-grey w3-round">
                {cake.range}
                {cake.price}
              </span>
            </h1>
            <p className="w3-text-grey">{cake.description}</p>
            <hr />
          </div>
        ))}
        {/* </div> */}
      </React.Fragment>
    );
  }
  // componentDidMount() {
  //   var counted = {
  //     ...this.state.counters.map(c => {
  //       console.log();
  //     })
  //   };
  // }
  // }
  formatCount(value) {
    // const counterss = this.state.counters.map(c => {
    // if (c.id == id) {
    //   const { value } = c;
    //   console.log(value);
    return value === 0 ? "Zero" : value;
    //   }
    // });
    // return counterss[0];
    // console.log(counterss[0]);
  }
  getBadgeClasses(value) {
    let classes = "badge m-2 badge-";
    // console.log(this.state.counters);
    // const countersss = this.state.counters.map(c => {
    //   if (c.id == id) {
    // console.log(this.props.counter);
    console.log(value);
    classes += value === 0 ? "warning" : "primary";
    console.log(classes);
    return classes;
    //   }
    // });
    // return countersss[0];
  }
}

export default Cakes;
