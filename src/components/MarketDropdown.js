import React, { Component } from "react"

class MarketDropdown extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onClick(event.target.value)
    console.log(event.target.value)
  }

  render(){

    return(
      <select onChange={this.handleChange}>
        <option value="ETH">BTC-ETH</option>
        <option value="LTC">BTC-LTC</option>
        <option value="DOGE">BTC-DOGE</option>
      </select>
    )
  }
}

export default MarketDropdown
