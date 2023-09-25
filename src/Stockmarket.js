import React, { useState } from 'react';

export default function StockMarket() {
  const API_KEY = 'LE60TBPVTBUV6WW1';

  const [symbol, setSymbol] = useState('');
  const [stock, setStock] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(symbol);
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`,
      {
        method: 'GET',
      }
    );
    if (response.ok) {
      const data = await response.json();
      setStock(data['Time Series (Daily)']); // Update stock data with daily time series
      setError(null); // Clear any previous errors
    } else {
      setError('Something went wrong');
      setStock({}); // Clear stock data in case of an error
    }
  };

  return (
    <>
      <div className="container mt-2">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
      <div className="container">
        {error && <p>{error}</p>}
        {Object.keys(stock).length > 0 && (
          <div>
            {Object.keys(stock).map((date) => (
              <div key={date}>
                <h1>Date: {date}</h1>
                <p>Open: {stock[date]['1. open']}</p>
                <p>High: {stock[date]['2. high']}</p>
                <p>Low: {stock[date]['3. low']}</p>
                <p>Close: {stock[date]['4. close']}</p>
                <p>Volume: {stock[date]['5. volume']}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
