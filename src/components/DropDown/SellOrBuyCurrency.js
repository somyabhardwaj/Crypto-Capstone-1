import React from 'react';
import { useSelector } from 'react-redux';

function SellCurrency() {
  const Currency = useSelector((state) => state.currencyDrop);
  const Market = useSelector((state) => state.marketData.marketData);
  return (
    <>
      <div className="text-center">
        <div>
          <h1 className="font-bold text-gray-600 text-xl m-2 mx-4">Exchange Coins</h1>
        </div>
        {/* Sell Currency starts here */}
        <div className="flex justify-around items-center p-3">
          <div>
            <h1 className="font-bold text-orange-500 mx-2">Sell</h1>
          </div>
          <div className="relative inline-flex">
            <select className="border border-gray-300 rounded text-gray-600 h-10 pl-2 w-28 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option>Currency</option>
              {Array.isArray(Currency) ? (
                Currency.map((currency) => (
                  <option key={currency} value={Currency}>
                    {currency.toUpperCase()}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
            </select>
            <svg
              className={`w-3 h-3 absolute top-4 text-center right-3 pointer-events-none`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <div>
            <input className="w-20 mx-4 p-1 border rounded" type="text" placeholder="Amount" />
          </div>
        </div>

        {/* Buy Currency starts here */}

        <div className="flex justify-around items-center p-3">
          <div>
            <h1 className="font-bold text-green-600 mx-2">Buy</h1>
          </div>
          <div className="relative inline-flex">
            <select className="border border-gray-300 rounded text-gray-600 h-10 pl-2 w-28 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option>Coins</option>
              {Array.isArray(Market) ? (
                Market.map((Coin) => (
          <option key={Coin.id} value={Coin.id}>
            {Coin.name}
          </option>
        ))
                
              ) : (
                <option>Loading...</option>
              )}
            </select>
            <svg
              className={`w-3 h-3 absolute top-4 text-center right-3 pointer-events-none`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <div>
            <p className="w-20 mx-4 p-1 border rounded">exchange</p>
          </div>
        </div>
        <div>
            <button className="font-bold text-white bg-blue-700 p-2 m-2 border rounded rounded-sm border-black">Exchange</button>
        </div>
      </div>
    </>
  );
}

export default SellCurrency;
