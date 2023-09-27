import React, { useEffect, useState } from 'react';

  
function MarketCap() {

  const [market, setMarket] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setMarket(result);
        setLoading(false); // Update loading state when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Update loading state on error
      }
    }

    fetchData();
  }, []); // Empty dependency array to ensure this effect runs only once

  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

  return (
    <>
    <div className=" absolute pt-3 pr-20 bg-white text-2xl ">
      <h1 className='font-bold'>Crypto Market Cap</h1>
      </div>
    <div className="h-screen mt-12">
    
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul >
          {market.map((coin) => (
            <div>
            <div className="flex items-center justify-between">
            
            <div className=' flex items-center '>
            <div className="w-5 bg-gray-300 rounded-full">
              <img src={coin.image} />
            </div>
            <div className="mx-2">
            {capitalize(coin.id)}
            </div>
            </div>
            <div  className="justify-end">
             {coin.price_change_percentage_24h.toFixed(2)}
</div>

            </div>
            <div className="text-sm text-slate-500 mx-7 mb-2">
          
            Mkt.Cap: $ {coin.market_cap.toLocaleString(2)}
            </div>
            </div>
            
          ))}
        </ul>
      )}
    </div>
    </>
  );
}

export default MarketCap;
