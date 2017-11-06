import React, { Component } from "react"
import socketIOClient from "socket.io-client"
import OrderTable from './components/OrderTable'
import MarketDropdown from './components/MarketDropdown'
import OrderAreaChart from './components/OrderAreaChart'
import './App.css'

const endpoint = "http://127.0.0.1:8080"

class App extends Component {
  constructor() {
    super()
    this.state = {
      response: false,
      orders: {},
      market: "ETH"
    }
  }

  renderMarketDropdown(){
    return (
      <MarketDropdown
        onClick={(market) => this.handleClick(market)}
      />
    )
  }

  handleClick(market){
    this.newSocketConnection(market)
    this.setState({market: market})
  }

  newSocketConnection(market){
    const socket = socketIOClient(endpoint, {query:`market=${market}`})
    socket.on("orders", data => this.setState({ orders: data }))
  }

  componentDidMount() {
    this.newSocketConnection("ETH")
  }

  render() {
    return (
      <div class="container-fluid text-center">
        <h1>BTC-{this.state.market} Combined Order Books</h1><br></br>
        <h5>{this.renderMarketDropdown()}</h5><br></br>
        <div class="col-md-10 offset-md-1 text-center" alt="chart">
          <OrderAreaChart orders={this.state.orders} market={this.state.market} />
        </div>
        <div class="col-md-6 offset-md-3"><br></br><br></br>
          <h5 class = "text-center font-italic bg-warning">Highlighting Represents Overlapping Asks/Bids</h5><br></br>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h3 class = "text-center">Bids</h3>
            <OrderTable type="bids" orders={this.state.orders[0]}/>
          </div>
          <div class="col-md-6">
            <h3 class = "text-center">Asks</h3>
            <OrderTable type="asks" orders={this.state.orders[1]}/>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
