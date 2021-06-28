import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
export default class Transaction extends Component {
  deleteTransaction = async () => {
    // console.log(this.props.transaction._id);
    await axios.delete(
      "http://localhost:8080/transaction/" + this.props.transaction._id
    );
  };
  render() {
    let amount;
    if (this.props.transaction.amount < 0) {
      amount = (
        <span className="amountWithdraw">
          {this.props.transaction.amount} $
        </span>
      );
    } else {
      amount = (
        <span className="amountDeposit">{this.props.transaction.amount} $</span>
      );
    }
    return (
      <div className="transaction">
        <span>{this.props.transaction.vendor}</span>
        {amount}
        <div>
          <button className="delete-btn" onClick={this.deleteTransaction}>
            DELETE
          </button>
        </div>
      </div>
    );
  }
}
