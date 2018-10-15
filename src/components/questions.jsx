import React, { Component } from "react";
import Collapsible from "react-collapsible";

class Questions extends Component {
  state = {
    questionns: [
      { question: "Who is 'Mkate Poa Bakery'?", body: "Lorem Ipsum" },
      { question: "What do we offer?", body: "Lorem Ipsum" },
      { question: "Where do we deliver to?", body: "Lorem Ipsum" },
      { question: "How to arrange for events", body: "Lorem Ipsum" },
      { question: "Payment plans", body: "Lorem Ipsum" }
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
      <div classname="card" style={{ paddingLeft: 60 }}>
        <div classname="card-title">FAQS</div>
        <div classname="card-conent menu w3-border-dark-grey w3-yellow w3-grayscale">
          {this.state.questionns.map(questionnn => (
            <Collapsible trigger={questionnn.question}>
              <p>{questionnn.body}</p>
            </Collapsible>
          ))}
        </div>
      </div>
    );
  }
}

export default Questions;
