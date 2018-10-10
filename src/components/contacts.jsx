import React, { Component } from "react";

class Contacts extends Component {
  state = {};
  render() {
    return (
      <form id="contact-us" name="sendMails">
        <div
          className="col-xs-6 col-xs-12 animated"
          data-animation="fadeInLeft"
          data-animation-delay="300"
        >
          <input
            type="text"
            name="name"
            id="name"
            required="required"
            className="form"
            placeholder="Name"
          />

          <input
            type="email"
            name="email"
            id="email"
            required="required"
            className="form"
            placeholder="Email"
          />

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">
                Subject
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              name="subject"
            >
              <option selected>Choose...</option>
              <option name="subject" value="jarabu">
                Cakes
              </option>
              <option name="subject" value="medical">
                Bread
              </option>
              <option name="subject" value="sales">
                Cookies
              </option>
              <option name="subject" value="question">
                Pies
              </option>
              <option name="subject" value="other">
                Pastries
              </option>
              <option name="subject" value="other">
                Other
              </option>
            </select>
          </div>
        </div>

        <div
          className="col-xs-6 col-xs-12 animated"
          dataAnimation="fadeInRight"
          dataAnimationDelay="400"
        >
          <textarea
            name="message"
            id="message"
            className="form textarea"
            placeholder="Message"
          />
        </div>
        <div className="relative fullwidth col-xs-12">
          <button
            type="submit"
            id="submit"
            name="submit"
            className="form-btn semibold"
          >
            Send Message
          </button>
        </div>
        <div className="clear" />
      </form>
    );
  }
}

export default Contacts;
