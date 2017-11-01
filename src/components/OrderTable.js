import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class OrderTable extends Component {
  constructor() {
    super()
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:8080",
      orders: {}
    };
  }
  componentDidMount() {
    const { endpoint } = this.state
    const socket = socketIOClient(endpoint)
    socket.on(this.props.type, data => this.setState({ orders: data }))
  }
  render() {
    // const orderList = this.state.orders && this.state.orders.map((order) => {
    //   price = Object.keys(order)
    //   return <OrderRow price={price} volumes={order[price]} />
    // })

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

      </tbody>
     </table>
    )

  }
}

export default OrderTable;
