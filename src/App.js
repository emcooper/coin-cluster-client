import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import OrderTable from './components/OrderTable'

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:8080"
    };
  }
  // componentDidMount() {
  //   const { endpoint } = this.state;
  //   const socket = socketIOClient(endpoint);
  //   socket.on("FromAPI", data => this.setState({ response: data }));
  // }
  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <OrderTable type="bids"/>
      </div>
    );
  }
}
export default App;
