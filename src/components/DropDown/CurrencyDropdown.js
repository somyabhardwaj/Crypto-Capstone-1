import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '../../slices/CurrencySlice';
import fetchCurrencyDrop from '../../slices/api/GetCurrencyApi';

function CurrencyDropDown() {
  const dispatch = useDispatch();

  // Fetch currency data from Redux state
  const market = useSelector((state) => state.currencyDrop);

  // Fetch currency data when the component mounts
  useEffect(() => {
    dispatch(fetchCurrencyDrop());
  }, [dispatch]);

  // Handle the change event when a currency is selected from the dropdown
  const handleOnChange = (e) => {
    dispatch(setCurrency(e.target.value));
  };

  return (
    <div className="relative inline-flex ov">
      {/* Dropdown for selecting currencies */}
      <select
        onChange={handleOnChange}
        className="scrollbar-none border border-gray-300 rounded text-gray-600 lg:mx-0 md:mx-0  h-9 pl-3 pr-8 bg-white hover:border-gray-400 focus:outline-none appearance-none"
      >
        <option>USD</option>
        {/* Check if currency data is an array */}
        {Array.isArray(market) ? (
          // Map through currency data to populate currency options
          market.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))
        ) : (
          <option>Loading...</option>
        )}
      </select>
      {/* Dropdown arrow icon */}
      <svg
        className={`w-4 h-3 absolute top-4 text-center right-3 pointer-events-none`}
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

export default CurrencyDropDown;
