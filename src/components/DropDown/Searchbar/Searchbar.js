import React from 'react';

function Searchbar() {
  return (
    <div className="relative w-3/4 ml-4">
      <input
        type="search"
        className=" block w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-8 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        id="exampleSearch"
        placeholder="   Search By Coin"
      />
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
        </svg>
        {" "} {/* Add a space here */}
      </div>
    </div>
  );
}

export default Searchbar;
