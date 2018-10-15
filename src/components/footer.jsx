import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { Footer } from "mdbreact";

class Footers extends Component {
  state = {};
  render() {
    return (
      <footer
        className="footer-area section-gap w3-pink w3-grayscale"
        style={{ marginBottom: 0 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                {/* <div className="w3-black"> */}
                <h6>About Us</h6>
                <p>
                  We offer full-service catering for any event, large or small.
                  We understand your needs and we will cater the food to satisfy
                  the biggerst criteria of them all, both look and taste.
                </p>
              </div>
            </div>
            <div className="col-lg-5  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Have any enqeries?</h6>
                <p>Get in touch with us</p>
                <div className="" id="mc_embed_signup">
                  <form
                    target="_blank"
                    novalidate="true"
                    action="#"
                    method="get"
                    className="form-inline"
                  >
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="Email Address"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Email Address'"
                      required=""
                      type="email"
                    />
                    <button className="click-btn">
                      <i className="lnr lnr-arrow-right" aria-hidden="true" />
                    </button>
                    <div style={{ position: "absolute", left: -"5000px" }}>
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        tabindex="-1"
                        value=""
                        type="text"
                      />
                    </div>
                    <div className="info" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
              <div className="single-footer-widget">
                <h6>Our branches</h6>
                <ul>
                  <li>Nairobi</li>
                  <li>Nairobi</li>
                  <li>Mombasa</li>
                  <li>Kisumu</li>
                  <li>Kisumu</li>
                </ul>
                <div className="footer-social d-flex align-items-center">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                  <a href="#">
                    <i className="fa fa-behance" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <p className="footer-text">
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This site is made
                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="http://www.jarabutours.com" target="_blank">
                  Jarabu Creatives
                </a>
              </p>
            </div>
            <div className="col-lg-3" style={{ textAlign: "right" }}>
              <a href="#home">Back to top</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footers;
