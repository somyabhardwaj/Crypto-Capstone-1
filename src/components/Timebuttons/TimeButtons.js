import React, { useState } from 'react'


function TimeButtons() {
 
  return (
    <div>
       <div className="flex items-center ml-40">
        <button  className="focus:outline-none focus:ring focus:ring-blue flex items-center focus w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2" >1D</button>
        <button  className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2 " >1W</button>
        <button  className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2 " >2W</button>
        <button  className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2 " >1M</button>
        <button  className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2 " >6M</button>
        <button className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2 " >1Y</button>
    </div>
    </div>
  )
}
export default TimeButtons
