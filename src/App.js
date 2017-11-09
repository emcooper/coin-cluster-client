import React, { Component } from "react"
import socketIOClient from "socket.io-client"
import OrderTable from './components/OrderTable'
import MarketDropdown from './components/MarketDropdown'
import OrderAreaChart from './components/OrderAreaChart'
import './App.css'

const endpoint = "https://coin-cluster-backend.herokuapp.com/"

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
      <br></br>
        <h1><img class="bitcoin-logo"src="http://www.clipartlord.com/wp-content/uploads/2013/03/coins.png"/>Coin Cluster<img class="bitcoin-logo"src="http://www.clipartlord.com/wp-content/uploads/2013/03/coins.png"/></h1>
        <h3>Cryptocurrency Order Book Aggregator</h3><br></br>
        <h4 class="blue-text">BTC-{this.state.market} Market</h4><br></br>
        <h5>{this.renderMarketDropdown()}</h5>
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
