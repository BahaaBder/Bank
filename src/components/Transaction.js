import React, { Component } from "react";
import axios from "axios";
import "../css/transaction.css";
export default class Transaction extends Component {
  deleteTransaction = () => {
    axios
      .delete("http://localhost:8080/transaction/" + this.props.transaction._id)
      .then((res) => this.props.updateTransactionsAfterDelete(res.data));
  };

  render() {
    return (
      <div className="transaction">
        <span className="transactionText">
          Vendor: {this.props.transaction.vendor}
          <br />
          Category: {this.props.transaction.category}
        </span>
        <span
          className={
            this.props.transaction.amount < 0
              ? "amountWithdraw"
              : "amountDeposit"
          }
        >
          {this.props.transaction.amount} $
        </span>

        <button className="deleteBtn" onClick={this.deleteTransaction}>
          DELETE
        </button>
      </div>
    );
  }
}
