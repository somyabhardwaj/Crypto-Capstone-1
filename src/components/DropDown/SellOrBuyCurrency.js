import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchExchangeRates from '../../slices/api/ExchangeRatesApi';

function SellCurrency() {
  const dispatch = useDispatch();

  // Fetch market data and exchange rates from Redux state
  const marketData = useSelector((state) => state.marketData.marketData);
  const exchangeData = useSelector((state) => state.ExchangeRates.rates);

  // State variables for selected coins, amount, exchange result, and error handling
  const [sellCoin, setSellCoin] = useState(''); // Selected coin for selling
  const [sellAmount, setSellAmount] = useState(''); // Amount to sell
  const [buyCoin, setBuyCoin] = useState(''); // Selected coin for buying
  const [exchangeResult, setExchangeResult] = useState('');
  const [error, setError] = useState('');

  // Fetch exchange rates when the component mounts
  useEffect(() => {
    dispatch(fetchExchangeRates());
  }, [dispatch]);

  // Handle the exchange process
  const handleExchange = () => {
    setError(''); // Clear any previous error message

    // Validate input
    if (!sellCoin || !buyCoin || !sellAmount || isNaN(sellAmount)) {
      setError('Invalid input');
      setExchangeResult('');
      return;
    }

    // Check if selected coins are valid currencies
    if (!exchangeData.rates[sellCoin] || !exchangeData.rates[buyCoin]) {
      setError('Invalid currency selection');
      setExchangeResult('');
      return;
    }

    // Calculate the exchanged amount
    const sellValue = exchangeData.rates[sellCoin].value;
    const buyValue = exchangeData.rates[buyCoin].value;
    const exchangedAmount = (sellAmount * sellValue) / buyValue;

    // Display the result
    setExchangeResult(`${sellAmount} ${sellCoin} = ${exchangedAmount.toFixed(2)} ${buyCoin}`);
  };

  return (
    <div className="text-center">
      <div>
        <h1 className="font-bold text-gray-600 text-xl m-2 mx-4">Exchange Coins</h1>
      </div>
      {/* Sell Currency section */}
      <div className="flex justify-around items-center p-3">
        {/* Labels */}
        <div>
          <h1 className="font-bold text-orange-500 mx-2">Sell</h1>
        </div>
        {/* Dropdown for selecting the coin to sell */}
        <div className="relative inline-flex">
          <select
            className="scrollbar-none border border-gray-300 rounded text-gray-600 h-10 pl-2 w-28 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            value={sellCoin}
            onChange={(e) => setSellCoin(e.target.value)}
          >
            <option value="">Select Coin</option>
            {marketData.map((Coin) => (
              <option key={Coin.id} value={Coin.symbol}>
                {Coin.name}
              </option>
            ))}
          </select>
         
        </div>
        {/* Input for entering the amount to sell */}
        <div>
          <input
            className="w-20 mx-4 p-1 border rounded"
            type="number"
            placeholder="Amount"
            value={sellAmount}
            onChange={(e) => setSellAmount(e.target.value)}
          />
        </div>
      </div>

      {/* Buy Currency section */}
      <div className="flex justify-around items-center p-3">
        {/* Labels */}
        <div>
          <h1 className="font-bold text-green-600 mx-2">Buy</h1>
        </div>
        {/* Dropdown for selecting the coin to buy */}
        <div className="relative inline-flex">
          <select
            className="scrollbar-none border border-gray-300 rounded text-gray-600 h-10 pl-2 w-28 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            value={buyCoin}
            onChange={(e) => setBuyCoin(e.target.value)}
          >
            <option value="">Select Coin</option>
            {marketData.map((Coin) => (
              <option key={Coin.id} value={Coin.symbol}>
                {Coin.name}
              </option>
            ))}
          </select>
        </div>
        {/* Display the exchange result */}
        <div>
          <p className="w-20 mx-4 p-1 border rounded">exchange</p>
        </div>
      </div>
      {/* Button for initiating the exchange */}
      <div>
        <button
          className="font-bold text-white bg-blue-700 p-2 m-2 border rounded rounded-sm border-black"
          onClick={handleExchange}
        >
          Exchange
        </button>
      </div>

      {/* Error and Exchange result */}
      {error && (
        <div className="text-center">
          <p className="text-red-500 font-bold">{error}</p>
        </div>
      )}
      {exchangeResult && (
        <div className="text-center">
          <p className="text-xl font-bold mt-4">{exchangeResult}</p>
        </div>
      )}
    </div>
  );
}

export default SellCurrency;
