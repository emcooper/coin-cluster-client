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
      exchanges: ["Bittrex", "Poloniex"]
    };
  }

  // componentDidMount() {
  //   const { endpoint } = this.state
  //   const socket = socketIOClient(endpoint)
  //   let index = 0
  //   if(this.props.type === "asks"){index = 1}
  //   socket.on("orders", data => this.setState({ orders: data[index] }))
  // }
  render() {
    const orderList = this.props.orders && Object.keys(this.props.orders).map((price) => {
      return <OrderRow price={price} volumes={this.props.orders[price]} />
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
