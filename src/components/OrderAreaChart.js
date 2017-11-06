import React, { Component } from "react"
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

class OrderAreaChart extends Component {

  roundIncrement(price){
    return +(Math.round(price*2000)/2000).toFixed(4)
  }

  render(){
    let data =[]

    if(this.props.orders[0] && this.props.market === 'ETH'){
      let bids = this.props.orders[0]
      let asks = this.props.orders[1]
      let min = + this.roundIncrement(Object.keys(bids).slice(-1)[0])
      let max = + Object.keys(asks).slice(-1)[0]
      let smoothedData = {}
      let i = min
      while(i <= max + .0005){
        smoothedData[this.roundIncrement(i)] = {'bid': 0, 'ask': 0}
        i = +this.roundIncrement(i) + .0005
      }
      Object.keys(bids).forEach((price) => {
        let totalVol = 0
        let roundedPx = this.roundIncrement(price)
        Object.keys(bids[price].volumes).forEach((exchangeName) => {
          totalVol += bids[price].volumes[exchangeName]
        })
        smoothedData[roundedPx]['bid'] += totalVol
      })

      Object.keys(asks).forEach((price) => {
        let totalVol = 0
        let roundedPx = this.roundIncrement(price)
        Object.keys(asks[price].volumes).forEach((exchangeName) => {
          totalVol += asks[price].volumes[exchangeName]
        })
        smoothedData[roundedPx]['ask'] += totalVol
      })

      data = Object.keys(smoothedData).map(function(price){
        return {price: +price, bid: smoothedData[price]['bid'], ask: smoothedData[price]['ask']}
      })
    } else {
        if(this.props.orders[0]){
        let bids = this.props.orders[0]
        Object.keys(bids).forEach(function(price){
          let totalVol = 0
          Object.keys(bids[price].volumes).forEach((exchangeName) => {
            totalVol += bids[price].volumes[exchangeName]
          })
          data.push({price: + price, bid: totalVol})
        })

        let asks = this.props.orders[1]
        Object.keys(asks).forEach(function(price){
          let totalVol = 0
          Object.keys(asks[price].volumes).forEach((exchangeName) => {
            totalVol += asks[price].volumes[exchangeName]
          })
          data.push({price: + price, ask: totalVol})
        })


      data.sort(function (a, b) {
        return a.price - b.price
      })
      }
    }

    return(

      <AreaChart width={1000} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.5}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={.5}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="price" type="number" allowDataOverflow={true} domain={['dataMin', 'dataMax']} />
        <YAxis allowDataOverflow={true} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="ask" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" connectNulls={true} />
        <Area type="monotone" dataKey="bid" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" connectNulls={true} />
      </AreaChart>
    )
  }

}

export default OrderAreaChart
