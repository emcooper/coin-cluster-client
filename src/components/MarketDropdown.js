import React, { Component } from "react"

class MarketDropdown extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onClick(event.target.value)
  }

  render(){

    return(
      <form >
      <label> Select Market: </label><br></br>
      <select class="btn btn-primary btn-lg" onChange={this.handleChange} aria-label="select market dropdown">
        <option value="ETH">BTC-ETH</option>
        <option value="LTC">BTC-LTC</option>
        <option value="DOGE">BTC-DOGE</option>
      </select>
      </form>
    )
  }
}

export default MarketDropdown
