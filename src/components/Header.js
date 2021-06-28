import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <span>
          <img
            className="logo-img"
            src="https://freepngimg.com/thumb/tree/6-2-tree-free-png-image-thumb.png"
          ></img>
        </span>
        <span className="header-element">
          <Link to="/transactions" className="delete-underline-link">
            Transactions
          </Link>
        </span>
        <span className="header-element">
          <Link to="/operations" className="delete-underline-link">
            Operations
          </Link>
        </span>
      </div>
    );
  }
}
