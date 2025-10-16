import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/LineChart/LineChart';

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-GLfVNK5TrNJFzzi8ZVrmUfbz',
        },
      });
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': 'CG-GLfVNK5TrNJFzzi8ZVrmUfbz',
          },
        }
      );
      const data = await response.json();
      setHistoricalData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency, coinId]);

  if (!coinData || !historicalData) {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }

  const currentPrice = coinData.market_data?.current_price?.[currency.name]?.toLocaleString() ?? 'N/A';
  const high24 = coinData.market_data?.high_24h?.[currency.name]?.toLocaleString() ?? 'N/A';
  const low24 = coinData.market_data?.low_24h?.[currency.name]?.toLocaleString() ?? 'N/A';

  return (
    <div className="coin">
      <div className="coin-name">
        <img src={coinData.image?.large} alt={coinData.name} />
        <p>
          <b>
            {coinData.name} ({coinData.symbol.toUpperCase()})
          </b>
        </p>
      </div>
      <div className="coin-chart">
        <LineChart historicalData={historicalData} />
      </div>
      <div className="coin-info">
        <ul>
          <li>Crypto Market Rank</li>
          <li>{coinData.market_cap_rank ?? 'N/A'}</li>
        </ul>
        <ul>
          <li>Current price</li>
          <li>
            {currency.symbol} {currentPrice}
          </li>
        </ul>
        <ul>
          <li>24 Hour high</li>
          <li>
            {currency.symbol} {high24}
          </li>
        </ul>
        <ul>
          <li>24 Hour low</li>
          <li>
            {currency.symbol} {low24}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Coin;
