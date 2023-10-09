import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchMarket from '../slices/api/MarketDataApi';

function MarketCap() {
  const dispatch = useDispatch();
  const market = useSelector((state) => state.marketData.marketData);
  const status = useSelector((state) => state.marketData.status);

  // Fetch market data when the component mounts or when the status is not 'loading'
  useEffect(() => {
    if (status !== 'loading') {
      dispatch(fetchMarket());
    }
  }, [dispatch]);

  // Function to capitalize the first letter of a word
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <>
    <div className="md:w-80 lg:w-80">    
      <div className=" bg-white text-2xl">
        <h1 className='font-bold text-gray-600'>Crypto Market Cap</h1>
      </div>
      <div className=" mt-4 pb-12">
        <ul>
          {/* Loop through market data and render each coin */}
          {market.map((coin) => (
            <div key={coin.id}>
              <div className="flex items-center justify-between">
                <div className='flex items-center'>
                  <div className="w-5 bg-gray-300 rounded-full">
                    <img src={coin.image} alt={coin.id} />
                  </div>
                  <div className="mx-2">
                    {capitalize(coin.id)}
                  </div>
                </div>
                <div className={`text-sm ${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
              </div>
              <div className="text-sm text-slate-500 mx-7 mb-2">
                Mkt.Cap: $ {coin.market_cap.toLocaleString('en-US')}
              </div>
            </div>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
}

export default MarketCap;
