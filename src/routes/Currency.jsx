import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import "../App.css";

const Currency = () => {
  let { id } = useParams();
  const [coin, setCoin] = useState({
    name: "",
    symbol: "",
    rank:"",
    price_btc: "",
    price_usd: "",
    volume24: 0
  });

  useEffect(() => {
    Axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`)
      .then((response) => {
        setCoin({
          name: response.data[0].name,
          symbol: response.data[0].symbol,
          rank: response.data[0].rank,
          price_btc: response.data[0].price_btc,
          price_usd: response.data[0].price_usd,
          volume24: response.data[0].volume24
        });
        console.log(response.data[0]);
      });
  }, [id]);

  return (
    <div className="currency-details">
      <h1>CRYPTO COIN DETAILS</h1>
      <div className="details-card">
        <p><strong>Full Name:</strong> {coin.name}</p>
        <p><strong>Ticker Symbol:</strong> {coin.symbol}</p>
        <p><strong>Price in BTC:</strong> {coin.price_btc}</p>
        <p><strong>Price in USD:</strong> {coin.price_usd}</p>
        <p><strong>24h Volume (USD):</strong> {coin.volume24.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Currency;
