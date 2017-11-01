import React, { Component } from "react"
import socketIOClient from "socket.io-client"
import OrderRow from './OrderRow'

class OrderTable extends Component {
  constructor() {
    super()
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:8080",
      orders: {},
    };
  }
  componentDidMount() {
    const { endpoint } = this.state
    const socket = socketIOClient(endpoint)
    socket.on("bids", data => this .setState({ orders: data }))
  }
  render() {
    const orderList = this.state.orders && Object.keys(this.state.orders).map((price) => {
      return <OrderRow price={price} volumes={this.state.orders[price]} />
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
          <th scope="col">Bittrex</th>
          <th scope="col">Poloniex</th>
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
