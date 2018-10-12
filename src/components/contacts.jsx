import React, { Component } from "react";
import Questions from "./questions";

class Contacts extends Component {
  state = {};
  render() {
    return (
      <div
        className="w3-container w3-padding-64 w3-blue-grey w3-grayscale-min w3-xlarge"
        id="contact"
      >
        <div className="w3-content ">
          <h1 className="w3-center w3-jumbo" style={{ marginBottom: "64px" }}>
            Contact
          </h1>
          <p>Email us at mkatepoa@gmail.com or call us at 05050515-122330</p>

          <p className="w3-xxlarge">
            <strong>Reserve</strong> a table, ask for today's special or just
            send us a message:
          </p>
          <div className="row">
            <div className="w3-col s7">
              <form action="/action_page.php" target="_blank">
                <p>
                  <input
                    className="w3-input w3-padding-16 w3-border"
                    type="text"
                    placeholder="Name"
                    required
                    name="Name"
                  />
                </p>
                <p>
                  <input
                    className="w3-input w3-padding-16 w3-border"
                    type="text"
                    placeholder="Message \ Enquiry"
                    required
                    name="Message"
                  />
                </p>
                <p>
                  <button
                    className="w3-button w3-light-grey w3-block"
                    type="submit"
                  >
                    SEND MESSAGE
                  </button>
                </p>
              </form>
            </div>
            <div class="w3-col s5">
              <Questions />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
