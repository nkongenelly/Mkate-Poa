import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cakes from "./cakes";
import Breads from "./breads";
import Cookies from "./cookies";
import Pies from "./pies";
import Pastries from "./pastries";

class Menus extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div
          className="w3-container w3-black w3-padding-64 w3-xxlarge"
          id="menu"
        >
          <div className="w3-content">
            <h1
              className="w3-center w3-jumbo w3-italic"
              style={{ marginBottom: 64 }}
            >
              MKATE POA MENU
            </h1>
            <div className="w3-row w3-center w3-border w3-border-dark-grey">
              <a
                href="javascript:void(0)"
                // onClick={() => this.openMenu("Pizza")}
                // id="myLink"
              >
                <Link to="/cakes">
                  <div className="w3-col s4 tablink w3-padding-large w3-hover-red">
                    Cakes
                  </div>
                </Link>
              </a>
              <a href="#">
                <Link to="/bread">
                  <div className="w3-col s4 tablink w3-padding-large w3-hover-red">
                    Bread
                  </div>
                </Link>
              </a>
              <a>
                <Link to="/cookies">
                  <div className="w3-col s4 tablink w3-padding-large w3-hover-red">
                    Cookies
                  </div>
                </Link>
              </a>
              <a>
                <Link to="/pies">
                  <div className="w3-col s4 tablink w3-padding-large w3-hover-red">
                    Pies
                  </div>
                </Link>
              </a>
              <a>
                <Link to="/pastries">
                  <div className="w3-col s4 tablink w3-padding-large w3-hover-red">
                    Pastries
                  </div>
                </Link>
              </a>
            </div>
          </div>
          <Route path="/cakes" component={Cakes} />
          <Route path="/bread" component={Breads} />
          <Route path="/cookies" component={Cookies} />
          <Route path="/pies" component={Pies} />
          <Route path="/pastries" component={Pastries} />
        </div>
      </Router>
    );
  }
}

export default Menus;
