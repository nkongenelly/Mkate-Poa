import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/nav";
import Slideshows from "./components/slideshows";
import Abouts from "./components/abouts";
import Menus from "./components/menus";
import Contacts from "./components/contacts";
import Map from "./components/map";
import Footers from "./components/footer";

class App extends Component {
  state = {
    counters: []
  };
  render() {
    return (
      <div>
        <Navbar counters={this.state.counters} />
        <Slideshows />
        <Abouts />
        <Menus
          // onAddCart={this.state.handleCount}
          counters={this.state.counters}
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
        <Map />
        <div style={{bottom:0}}>
        <Footers />
        </div>
      </div>
    );
  }
}

export default App;
