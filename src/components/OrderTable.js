import React, { Component } from "react"
import OrderRow from './OrderRow'

class OrderTable extends Component {
  render() {
    let firstPrice = this.props.orders && Object.keys(this.props.orders)[0]
    const exchangesList = this.props.orders && Object.keys(this.props.orders[firstPrice]["volumes"]).map((exchangeName) => {
      return <th scope="col">{exchangeName}</th>
    })

    const orderList = this.props.orders && Object.keys(this.props.orders).map((price) => {
      return <OrderRow price={price} volumes={this.props.orders[price]["volumes"]} highlight={this.props.orders[price]["highlight"]} />
    })


    return (
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col" class="no-top-border"></th>
          <th class="text-center" colspan="12" scope="col">Volume</th>
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
