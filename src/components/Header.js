import React, { Component } from "react";
import { Link } from "react-router-dom";
const logo_Url =
  "https://freepikpsd.com/media/2019/10/costs-icon-png-4-Transparent-Images.png";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <span>
          <img className="logo-img" src={logo_Url} />
        </span>
        <span className="header-element">
          <Link to="/" className="deleteUnderlineLink">
            Home
          </Link>
        </span>
        <span className="header-element">
          <Link to="/transactions" className="deleteUnderlineLink">
            Transactions
          </Link>
        </span>
        <span className="header-element">
          <Link to="/operations" className="deleteUnderlineLink">
            Operations
          </Link>
        </span>
        <span className="header-element">
          <Link to="/categorytransactions" className="deleteUnderlineLink">
            Category
          </Link>
        </span>
      </div>
    );
  }
}
