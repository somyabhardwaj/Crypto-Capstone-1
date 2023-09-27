import React from 'react'

function BuyCurrency() {
    return (
        <>
         <div className='flex justify-around items-center '>
        <div>
            <h1 className='font-bold text-green-500 mx-4'>Buy </h1>
        </div>
            <div className="relative inline-flex">
                <select className=" border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                    <option>Crypto Currency</option>
                    <option>USD</option>
                    <option>INR</option>

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
            </div>
        </>
    )
}

export default BuyCurrency
