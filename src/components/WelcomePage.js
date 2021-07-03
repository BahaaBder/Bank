import React, { Component } from "react";
import "../css/welcomePage.css";
export default class WelcomePage extends Component {
  render() {
    return (
      <div className="welcomepage">
        <div className="block">
          <div className="welcomeHeader">Welcome to Bank</div>
          <div>
            <p className="welcomePageParagraph">
              Thank you so much for allowing us to help you with your recent
              account opening. We are committed to providing our customers with
              the highest level of service and the most innovative banking
              products possible. We are very glad you chose us as your financial
              institution and hope you will take advantage of our wide variety
              of savings, investment and loan products, all designed to meet
              your specific needs.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
