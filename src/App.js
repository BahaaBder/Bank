import "./style.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Operations from "./components/Operations";
import Transactions from "./components/Transactions";
import Header from "./components/Header";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      transactions: [],
      operation: { amount: "", vendor: "", category: "" },
    };
  }
  updateOperation = (operation) => {
    //let operation={...this.state.operation}

    this.setState({ operation });
  };
  async componentDidUpdate() {
    // GET request using fetch with async/await
    const response = await fetch("http://localhost:8080/transactions");
    const data = await response.json();
    // console.log(data)
    this.setState({ transactions: data });
  }
  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch("http://localhost:8080/transactions");
    const data = await response.json();
    // console.log(data)
    this.setState({ transactions: data });
  }
  render() {
    const state = this.state;
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            path="/transactions"
            exact
            render={({ match }) => (
              <Transactions match={match} transactions={state.transactions} />
            )}
          />
          <Route
            path="/operations"
            exact
            render={({ match }) => (
              <Operations
                match={match}
                operation={state.operation}
                updateOperation={this.updateOperation}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
