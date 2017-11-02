import React, { Component } from "react"
import OrderRow from './OrderRow'

class OrderTable extends Component {
  constructor() {
    super()
    this.state = {
      exchanges: ["Bittrex", "Poloniex"]
    };
  }
  render() {
    const orderList = this.props.orders && Object.keys(this.props.orders).map((price) => {
      return <OrderRow price={price} volumes={this.props.orders[price]["volumes"]} highlight={this.props.orders[price]["highlight"]} />
    })

    const exchangesList = this.state.exchanges.map((exchange) => {
      return <th scope="col">{exchange}</th>
    })

    return (
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col"></th>
          <th class="text-center" colspan="3" scope="col">Volume</th>
        </tr>
        <tr>
          <th scope="col">Price (BTC)</th>
          {exchangesList}
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        {orderList}
      </tbody>
     </table>
    )
  }
}

export default OrderTable
