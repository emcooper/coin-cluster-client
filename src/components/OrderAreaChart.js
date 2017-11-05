import React, { Component } from "react"
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

class OrderAreaChart extends Component {

  render(){
    const data = [
      {price: .03, bid: 4000, ask: 0},
      {price: .04, bid: 3000, ask: 0},
      {price: .05, bid: 3000, ask: 0},
      {price: .06, bid: 2000, ask: 0},
      {price: .07, bid: 9000, ask: 9908},
      {price: .08, bid: 0, ask: 4800},
      {price: .09, ask: 3800},
      {price: .1, ask: 4300},
];

    return(

      <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="price" type="number" domain={['dataMin', 'dataMax']}/>
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="ask" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="bid" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    )
  }

}

export default OrderAreaChart
