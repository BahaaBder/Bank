import React, { Component } from "react";
import Transaction from "./Transaction";
const stableBalance = 500;
export default class Transactions extends Component {
  render() {
    return (
      <div className="transactions">
        <div
          className={
            this.props.balance > stableBalance ? "balanceGreen" : "balanceRed"
          }
        >
          Balance: {this.props.balance}
        </div>
        {this.props.transactions.map((transaction) => (
          <Transaction
            updateTransactionsAfterDelete={
              this.props.updateTransactionsAfterDelete
            }
            transaction={transaction}
          />
        ))}
      </div>
    );
  }
}
