import React, { Component } from "react"

import OrderTable from './components/OrderTable'

class App extends Component {
  render() {
    return (
      <div>
      <div class="container">
        <h1 class = "text-center">Combined Order Books</h1><br></br>
        <h3 class = "text-center">BTC-ETH</h3><br></br>
        <div class="col-md-6 offset-md-3">

        <h5 class = "text-center font-italic bg-warning">Highlighting Represents Overlapping Asks/Bids</h5><br></br>
      </div>

        <div class="row">
          <div class="col-md-6">
            <h3 class = "text-center">Bids</h3>
            <OrderTable type="bids"/>

          </div>
          <div class="col-md-6">
            <h3 class = "text-center">Asks</h3>
            <div id='asks'></div>
          </div>
        </div>
      </div>
    </div>

    )
  }
}
export default App;
