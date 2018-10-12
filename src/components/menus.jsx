import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cakes from "./cakes";
import Breads from "./breads";
import Cookies from "./cookies";
import Pies from "./pies";
import Pastries from "./pastries";

class Menus extends Component {
  state = {
    showmenus: [
      { image: "images/clip2.png", name: "Cakes", link: "/cakes" },
      { image: "images/clip3.png", name: "Bread", link: "/bread" },
      { image: "images/clip4.png", name: "Cookies", link: "/cookies" },
      { image: "images/clip5.png", name: "Pies", link: "/pies" },
      { image: "images/clip6.png", name: "Pastries", link: "/pastries" }
    ]
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <div
            className="w3-container w3-red w3-grayscale w3-padding-64 w3-xxlarge"
            id="menu"
            style={{ padding: 230 }}
          >
            <div className="w3-content">
              <h1
                className="w3-center w3-jumbo w3-italic"
                style={{ marginBottom: 64 }}
              >
                MKATE POA MENU
              </h1>

              <div className="w3-row w3-center w3-border">
                <a
                  href="javascript:void(0)"
                  // onClick={() => this.openMenu("Pizza")}
                  // id="myLink"
                >
                  {this.state.showmenus.map((showmenu, index) => (
                    <Link to={showmenu.link}>
                      <div className="w3-col s2 tablink w3-padding-large w3-hover-red">
                        {showmenu.name}
                        <img
                          src={showmenu.image}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </Link>
                  ))}
                </a>
              </div>
            </div>
            <Route path="/cakes" component={Cakes} />
            <Route path="/bread" component={Breads} />
            <Route path="/cookies" component={Cookies} />
            <Route path="/pies" component={Pies} />
            <Route path="/pastries" component={Pastries} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default Menus;
