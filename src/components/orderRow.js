import React, { Component } from "react"

class OrderRow extends Component {

  render(){
    return(
    <tr>
      <th scope="row">{this.props.price}</th>
      <td>bittrexVol</td>
      <td>poloniexVol</td>
      <td>total</td>
    </tr>
  )
  }
}

export default OrderRow
