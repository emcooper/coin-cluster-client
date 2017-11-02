import React, { Component } from "react"

class OrderRow extends Component {

  render(){
    let total = 0
    const exchanges = Object.keys(this.props.volumes)
    const volumes = exchanges.map((exchangeName) => {
      total += this.props.volumes[exchangeName]
      return <td>{this.props.volumes[exchangeName]}</td>
    })

    return(
    <tr>
      <th scope="row">{this.props.price}</th>
      {volumes}
      <td>{total}</td>
    </tr>
  )
  }
}

export default OrderRow
