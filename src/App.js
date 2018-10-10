import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/nav";
import Slideshows from "./components/slideshows";
import Abouts from "./components/abouts";
import Menus from "./components/menus";
import Contacts from "./components/contacts";

class App extends Component {
  handleCount = menu => {
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
      <div className="container">
        <Navbar />
        <Slideshows />
        <Abouts />
        <Menus
        // onAddCart={this.state.handleCount}
        />
        <Contacts />
        {/* <Router>
          <Switch history={browserHistory}>
            <Route exact path="/" component={Slideshows} />
            <Route path="/about" component={Abouts} />
            <Route exact path="/menu" component={Menus} />
            <Route path="/contact" component={Contacts} />
          </Switch>
        </Router> */}
      </div>
    );
  }
}

export default App;
