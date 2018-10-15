import React, { Component } from "react";
import ReactDOM from "react-dom";
import Abouts from "./abouts";
import Menus from "./menus";
import Contacts from "./contacts";
import Counter from "./counter";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="w3-top w3-hide-small">
          <div
            className="w3-bar w3-xlarge w3-black w3-opacity w3-hover-opacity-off"
            id="myNavbar"
          >
            <a href="#home" className="w3-bar-item w3-button">
              {/* <Link to={"/"}> */}
              HOME
              {/* </Link> */}
            </a>
            <a href="#about" className="w3-bar-item w3-button">
              {/* <Link to={"/about"}> */}
              ABOUT
              {/* </Link> */}
            </a>
            <a href="#menu" className="w3-bar-item w3-button">
              {/* <Link to={"/menu"}> */}
              MENU
              {/* </Link> */}
            </a>
            <a href="#contact" className="w3-bar-item w3-button">
              {/* <Link to={"/contact"}> */}
              CONTACT US
              {/* </Link> */}
            </a>
            <a href="#contact" className="w3-bar-item w3-button">
              {/* <Link to={"/contact"}> */}
              FAQs
              {/* </Link> */}
            </a>
            {/* <form className="form-inline my-2 my-lg-0"> */}
            <a href="#menu" className="w3-bar-item w3-button">
              {/* <i className="fa fa-shopping-cart" aria-hidden="true" /> */}
              {/* <Link to={"/cart"}> */}
              Shopping Cart
              {/* </Link> */}
            </a>
            {/* <span className="badge">({{ Session::has('cart') ? Session::get('cart')->totalQty : '' }})</span> */}
            {/* </form> */}
          </div>

          {/* <Route exact path="/" component={App} /> */}
          <Switch>
            <Route path="/about" component={Abouts} />
            <Route exact path="/menu" component={Menus} />
            <Route path="/contact" component={Contacts} />
            <Route path="/cart" component={Menus} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navbar;
