// import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchMarket } from '../../slices/marketSlice';
import { setCoin } from '../../slices/ChartCoinSlice';


function CoinDropDown() {
  const dispatch=useDispatch();
  const market = useSelector((state) => state.marketData.marketData);

  const handelOnChange = (e)=>{
    console.log("Coin  is set to",e.target.value);
    dispatch(setCoin(e.target.value))  
  } 
  // Check if market is not an array or is empty
  if (!Array.isArray(market) || market.length === 0){
    return (
      <div className="relative inline-flex">
        <select  className="border border-gray-300 rounded text-gray-600 h-10 pl-2 pr-4 mx-1 bg-white hover:border-gray-400 focus:outline-none appearance-none">
          <option>Loading...</option>
        </select>
      </div>
    );
  }

  return (
    <div className="relative inline-flex">
      <select onChange={handelOnChange} className="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
        <option>Bitcoin</option>
        {market.map((currency) => (
          <option key={currency.id} value={currency.id}>
            {currency.name}
          </option>
        ))}
      </select>
      <svg
        className="w-4 h-3 absolute top-4 text-center right-3 pointer-events-none"
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
  );
}

export default CoinDropDown;
