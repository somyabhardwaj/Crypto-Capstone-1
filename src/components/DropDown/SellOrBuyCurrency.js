import React from 'react'
import { useSelector } from 'react-redux'

function SellCurrency() {
    const getCoin =useSelector((state)=> state.marketData.marketData)    
    const market = useSelector((state) => state.currencyDrop);
   

    return (
        <>
        <div className=" ">
        <div>
            <h1 className="font-bold text-gray-600 text-xl p-2">Exchange Coins</h1>
        </div>
        {/* sell Currency strarts here */}
        <div className='flex justify-around items-center p-3'>
        <div>
            <h1 className='font-bold text-orange-500 mx-4'>Sell</h1>
        </div>
            <div className="relative inline-flex">
                <select className=" border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                    <option>Select Currency</option>
                    {Array.isArray(market) ? (
          market.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))
        ) : (
          <option>Loading...</option>
        )}

                </select>
                <svg
                    className={` w-4 h-3 absolute top-4 text-center right-3 pointer-events-none `}
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
           <input className="border mx-4 p-1 rounded" type="text-box" placeholder="Enter Amount"></input>
            </div>
            </div>

            {/* Buy Currency starts here */}

            <div className='flex items-center p-1'>
        <div>
            <h1 className='font-bold text-green-600 ml-9 '>Buy</h1>
        </div>
            <div className="relative inline-flex mx-4">
                <select className=" border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                    <option>Select Coin</option>
                    {getCoin.map((coin) => (
          <option key={coin.id} value={coin.id}>
            {coin.name}
          </option>
          ))}

                </select>
                <svg
                    className={` w-4 h-3 absolute top-4 text-center right-3 pointer-events-none `}
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
            <div className='ml-6'>
           <p>Exchanged</p>
            </div>
            </div>
            {/* button start here  */}
            <div className="text-center ">
            <button className="btn btn-primary m-2 ">Exchange</button>
            </div>
            </div>
        </>
    )
}

export default SellCurrency
