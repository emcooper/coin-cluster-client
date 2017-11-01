import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import OrderTable from './components/OrderTable'

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <OrderTable type="bids"/>
      </div>
    );
  }
}
export default App;
