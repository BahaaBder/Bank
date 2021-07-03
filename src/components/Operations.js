import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Operations extends Component {
  constructor() {
    super();
    this.state = {
      operation: { amount: 0, vendor: "", category: "" },
    };
    this.errorMessage = "";
  }

  handleChange = (event) => {
    this.setState({
      operation: {
        ...this.state.operation,
        [event.target.name]:
          event.target.name == "amount"
            ? parseInt(event.target.value)
            : event.target.value,
      },
    });
  };

  isValidUserInputs = (operation) => {
    if (
      operation.amount == 0 ||
      operation.category.length == 0 ||
      operation.vendor.length == 0
    ) {
      return false;
    }
    return true;
  };

  saveNewTransactionOnDB = (newTransaction) => {
    if (this.isValidUserInputs(newTransaction)) {
      this.errorMessage = <div></div>;
      axios
        .post("http://localhost:8080/transaction", newTransaction)
        .then((res) => this.props.updateTransactionsAfterSave(res.data));
    } else {
      this.errorMessage = (
        <div className="error">Please Check Your Inputs.</div>
      );
    }
  };
  saveDeposit = () => {
    this.saveNewTransactionOnDB(this.state.operation);
  };

  saveWithdraw = () => {
    let newOperation = { ...this.state.operation };
    newOperation.amount = newOperation.amount * -1;
    this.saveNewTransactionOnDB(newOperation);
  };
  render() {
    return (
      <div className="operationPage">
        <div className="operationForm">
          <div>
            <input
              value={this.state.operation.amount}
              name="amount"
              type="number"
              placeholder="amount"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.operation.vendor}
              name="vendor"
              type="text"
              placeholder="vendor"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.operation.category}
              name="category"
              type="text"
              placeholder="category"
              onChange={this.handleChange}
            />
          </div>
          {this.errorMessage}
          <span>
            <button onClick={this.saveDeposit}>
              <Link
                to={
                  this.isValidUserInputs(this.state.operation)
                    ? "/transactions"
                    : "/operations"
                }
                className="deleteUnderlineLink"
              >
                Deposit
              </Link>
            </button>
          </span>
          <span>
            <button onClick={this.saveWithdraw}>
              <Link
                to={
                  this.isValidUserInputs(this.state.operation)
                    ? "/transactions"
                    : "/operations"
                }
                className="deleteUnderlineLink"
              >
                <span>Withdraw</span>
              </Link>
            </button>
          </span>
        </div>
      </div>
    );
  }
}
