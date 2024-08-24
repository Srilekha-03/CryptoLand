import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import  Axios  from 'axios';
import { useEffect } from 'react';


const Currency = () => {

    let {id} = useParams();
    
    const [coin,setCoin]=useState({name:"",symbol:"",price_btc:"",price_usd:"",volume24:0});

    useEffect(()=>{
        Axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`
    
        ).then((response)=>{
            setCoin({name:response.data[0].name,symbol:response.data[0].symbol,price_btc:response.data[0].price_btc,price_usd:response.data[0].price_usd,volume24:response.data[0].volume24})
          
          console.log(response.data[0])
        }
        )
      },[]);

  return (
    <div>
        <h1>Full name of crypto coin : {coin.name}</h1>
        <h1>Ticker symbol for crypto coin : {coin.symbol}</h1>
        <h1>How much coin costs in BTC : {coin.price_btc}</h1>
        <h1>Price in USD currency : {coin.price_usd}</h1>
        <h1>Trading volume of coin for last 24h in USD : {coin.volume24}</h1>
        
    </div>
  )
}

export default Currency