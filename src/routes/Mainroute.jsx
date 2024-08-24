import React, { useEffect, useState } from 'react';
import "../App.css";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MainRoute = () => {
  const [cryptolist, setCryptolist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=50')
      .then((response) => {
        setCryptolist(response.data.data);
        console.log(response.data.data);
      });
  }, []);

  return (
    <>
      <div id='header'>
        <h1>CRYPTOLAND</h1>
      </div>
      <div className='cryptolist'>
        {cryptolist.map((coin) => (
          <div key={coin.id} onClick={() => navigate(`/currency/${coin.id}`)}>
            <h1>{coin.name}</h1>
            <h1>{coin.price_usd}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainRoute;
