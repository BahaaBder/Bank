import React, { Component } from 'react'
import Transaction from './Transaction'
export default class Transactions extends Component {
    render() {
        return (
            <div>
                {this.props.transactions.map(transaction=>
                    <Transaction transaction={transaction}/>
                )}
            </div>
        )
    }
}
