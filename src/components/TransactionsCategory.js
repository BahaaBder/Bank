import React, { Component } from "react";
import "../css/transactionsCategory.css";
export default class TransactionsCategory extends Component {
  render() {
    let categoryPage;
    if (this.props.transactions.length == 0) {
      categoryPage = (
        <div className="page">
          <div className="message">
            <p>
              You don't have any Transactions yet. Please check the bank account
            </p>
          </div>
        </div>
      );
    } else {
      let transactionsAppearances = {};
      this.props.transactions.map((t) => {
        let transactionCategory = t.category.toLowerCase();
        if (transactionsAppearances[transactionCategory] === undefined) {
          transactionsAppearances[transactionCategory] = t.amount;
        } else {
          transactionsAppearances[transactionCategory] += t.amount;
        }
      });
      let categoryAppearances = Object.keys(transactionsAppearances);

      categoryPage = (
        <div>
          {categoryAppearances.map((ca) => {
            return (
              <div>
                {
                  <div className="categoryItemList">
                    <div>Category: {ca}</div>
                    <div>amount: {transactionsAppearances[ca]}</div>
                  </div>
                }
              </div>
            );
          })}
        </div>
      );
    }

    return <div>{categoryPage}</div>;
  }
}
