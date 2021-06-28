import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
export default class Operations extends Component {
  constructor() {
    super();
    this.state = {
      operation: { amount: "", vendor: "", category: "" },
    };
  }
  // Alert(props) {
  //   return <MuiAlert elevation={6} variant="filled" {...props} />;
  // }
  updateAmount = (event) => {
    let operation = { ...this.state.operation };
    operation.amount = event.target.value;
    this.setState({ operation });
  };
  updateVendor = (event) => {
    let operation = { ...this.state.operation };
    operation.vendor = event.target.value;
    this.setState({ operation });
  };
  updateCategory = (event) => {
    let operation = { ...this.state.operation };
    operation.category = event.target.value;
    this.setState({ operation });
  };
  updateOperation = () => {
    this.props.updateOperation(this.state.operation);
  };
  saveDeposit = async () => {
    await axios.post("http://localhost:8080/transaction", this.state.operation);
  };

  saveWithdraw = async () => {
    let operation = { ...this.state.operation };
    operation.amount = parseInt(operation.amount) * -1;
    // await this.setState({ operation });
    //console.log(this.state.operation);
    await axios.post("http://localhost:8080/transaction", operation);
  };
  render() {
    return (
      <div className="operation-page">
        <div className="operation-form">
          <div>
            <input
              type="number"
              placeholder="amount"
              onChange={this.updateAmount}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="vendor"
              onChange={this.updateVendor}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="category"
              onChange={this.updateCategory}
            />
          </div>
          <span>
            <button onClick={this.saveDeposit}>
              <Link to="/transactions" className="delete-underline-link">
                Deposit
              </Link>
            </button>
          </span>
          <span>
            <button onClick={this.saveWithdraw}>
              <Link to="/transactions" className="delete-underline-link">
                <span>Withdraw</span>
              </Link>
            </button>
          </span>
        </div>
      </div>
    );
  }
}
