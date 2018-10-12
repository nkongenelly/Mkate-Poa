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
    ],
    aboutGridMain: {
      background: "#fff",
      padding: "4em 3em",
      boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.25)",
      // -webkitBoxShadow: "1px 4px 24px 3px rgba(0, 0, 0, 0.14)",
      // -moz-box-shadow: "0 4px 16px 0 rgba(0, 0, 0, 0.25)",
      transition: "0.5s all"
      // -webkit-transition: "0.5s all",
      // -moz-transition: 0.5s all,
      // -o-transition: 0.5s all,
    }
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <div class="about py-5" id="menu">
            <div class="py-xl-5 py-lg-3" style={{ marginLeft: 120 }}>
              <h3 class="title text-center text-dark mb-sm-5 mb-4">
                <span>MKATE POA MENU</span>
              </h3>

              <div className="row">
                <a
                  href="javascript:void(0)"
                  // onClick={() => this.openMenu("Pizza")}
                  // id="myLink"
                >
                  {this.state.showmenus.map((showmenu, index) => (
                    <Link to={showmenu.link}>
                      <div
                        className="w3-col s2 tablink w3-padding-small w3-hover-red about-grid"
                        style={{ color: "#555", padding: 550 }}
                      >
                        {/* <div className="col-sm-2 about-grid"> */}
                        <div
                          className="about-grid-main"
                          style={this.state.aboutGridMain}
                        >
                          <img
                            src={showmenu.image}
                            className="img-fluid"
                            alt=""
                          />
                          <h4
                            className="mb-3"
                            style={{
                              fontSize: "20px",
                              color: "#ed4f4f"
                            }}
                          >
                            {showmenu.name}
                          </h4>
                          <a
                            href="#"
                            className="button-w3ls mt-4"
                            data-toggle="modal"
                            data-target="#exampleModalCenter1"
                          >
                            See Items
                            <i className="fas fa-long-arrow-alt-right ml-3" />
                          </a>
                        </div>
                      </div>
                      {/* </div> */}
                    </Link>
                  ))}
                </a>
              </div>
            </div>

            {/* <div className="w3-row w3-center">
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
            </div> */}
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
