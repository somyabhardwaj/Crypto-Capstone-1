import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCoin } from '../slices/ChartCoinSlice';

function Searchbar() {
  const dispatch = useDispatch();
  const marketList = useSelector((state) => state.marketData.marketData);
  const CoinList = marketList ? marketList.map((coinlist) => coinlist.id) : [];

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Add event listener to close dropdown when clicking outside the component
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOnChange = (value) => {
    setSearchValue(value);
    // Filter the list of coins based on the search input
    const filteredCoins = CoinList.filter((coin) =>
      coin.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(filteredCoins);
    setDropdownOpen(true);
  };

  const handleSelectCoin = (coin) => {
    // Dispatch an action to set the selected coin in the Redux store
    dispatch(setCoin(coin));
    setSearchValue(coin); // Display the selected coin in the search input
    setFilteredResults([]); // Clear filtered results
    setDropdownOpen(false); // Close the dropdown when a coin is selected
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Search input */}
      <input
        type="search"
        className="block w-full rounded border bg-white bg-clip-padding px-8 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 "
        placeholder="Search By Coin"
        value={searchValue}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      {/* Search icon */}
      <div className="absolute inset-y-0 left-0 pl-1  flex items-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-neutral-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.351-4.35"
          />
          <circle cx="10.5" cy="10.5" r="7.5" />
        </svg>{" "}
      </div>
      {/* Display the filtered results */}
      {dropdownOpen && (
        <div className="absolute z-10 h-44 scrollbar-thin overflow-scroll mt-2 left-0 w-full bg-white border border-neutral-300 rounded shadow-lg">
          {filteredResults.map((result) => (
            // Display each filtered result as a clickable option
            <div
              key={result}
              className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
              onClick={() => handleSelectCoin(result)}
            >
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
