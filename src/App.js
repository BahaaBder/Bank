import "./css/style.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Operations from "./components/Operations";
import Transactions from "./components/Transactions";
import Header from "./components/Header";
import TransactionsCategory from "./components/TransactionsCategory";
import WelcomePage from "./components/WelcomePage";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      balance: 0,
    };
  }

  updateTransactionsAfterDelete = (newTransactions) => {
    let balance = 0;
    this.setState({ transactions: newTransactions }, () => {
      this.state.transactions.map((t) => (balance += t.amount));
      this.setState({ balance });
    });
  };
  updateTransactionsAfterSave = (newTransaction) => {
    let updatedTransactions = [...this.state.transactions];
    updatedTransactions.push(newTransaction);
    this.setState({
      balance: this.state.balance + newTransaction.amount,
      transactions: updatedTransactions,
    });
  };

  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch("http://localhost:8080/transactions");
    const data = await response.json();
    let balance = 0;
    this.setState({ transactions: data }, () => {
      this.state.transactions.map((t) => (balance += t.amount));
      this.setState({ balance });
    });
  }
  render() {
    const state = this.state;
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={WelcomePage} />
          <Route
            path="/transactions"
            exact
            render={() => (
              <Transactions
                updateTransactionsAfterDelete={
                  this.updateTransactionsAfterDelete
                }
                transactions={state.transactions}
                balance={state.balance}
              />
            )}
          />
          <Route
            path="/operations"
            exact
            render={() => (
              <Operations
                updateTransactionsAfterSave={this.updateTransactionsAfterSave}
              />
            )}
          />
          <Route
            path="/categorytransactions"
            exact
            render={() => (
              <TransactionsCategory transactions={state.transactions} />
            )}
          />
        </div>
      </Router>
    );
  }
}
