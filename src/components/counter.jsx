import React, { Component } from "react";

class Counter extends Component {
  state = {};
  showHideClassName(show) {
    console.log(show);
    return show === true ? "display-block" : "display-none";
  }
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
        <div className={this.showHideClassName(this.props.show)}>
          <section className="modal-main">
            <div className="modal-dialog" role="document">
              <div
                id="counter"
                className="w3-c0l"
                style={{
                  padding: 30
                  //  display: "none"
                }}
              >
                {/* {this.props.counters.map(counter => ( */}
                <div key={this.props.counter.id}>
                  <span className="m-2">{this.props.counter.name}</span>
                  <span
                    className={this.getBadgeClasses(this.props.counter.value)}
                  >
                    {this.formatCount(this.props.counter.value)}
                  </span>
                  <span className="m-2">{this.props.counter.price}</span>
                  <span className="m-2">
                    {this.props.counter.price *
                      this.formatCount(this.props.counter.value)}
                  </span>
                  <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => this.props.onDecrease(this.props.counter)}
                    className="btn btn-primary btn-sm m-2"
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      this.props.onDelete(this.props.counter.id);
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
                {/* ))} */}
              </div>
              <button
                onclick={this.props.hideModal}
                className={this.showHideClassName(this.props.show)}
              >
                close
              </button>
            </div>
          </section>
        </div>

        {/* </div> */}
      </React.Fragment>
    );
  }
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
    console.log(this.props.counter);
    console.log(value);
    classes += value === 0 ? "warning" : "primary";
    console.log(classes);
    return classes;
    //   }
    // });
    // return countersss[0];
  }
}

export default Counter;
