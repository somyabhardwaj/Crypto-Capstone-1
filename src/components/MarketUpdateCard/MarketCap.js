import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchMarket from "../../api/MarketDataApi";



function MarketCap() {
  const dispatch = useDispatch();
  const market = useSelector((state) => state.marketData.marketData);
const status = useSelector((state) => state.marketData.status);


  useEffect(() => {
    //if (status !== "loading") { // Change this condition
      dispatch(fetchMarket());
    //}
  }, []);

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <>
      <div className="absolute pt-3 pb-2 pr-20 bg-white text-2xl">
        <h1 className='font-bold'>Crypto Market Cap</h1>
      </div>
      <div className="h-screen mt-16 pb-12">
        <ul>
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
                <div className={`text-sm text-${coin.price_change_percentage_24h < 0 ? 'red-500' : 'green-500'}`}>
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
    </>
  );
}

export default MarketCap;