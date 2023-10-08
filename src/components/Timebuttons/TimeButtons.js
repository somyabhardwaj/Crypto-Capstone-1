import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setTime } from '../../slices/timeButtonSlice';

function TimeButtons() {
 
  const dispatch = useDispatch();
  const handelOnClick=(e)=>{
   dispatch(setTime(e.target.value));
  }
  
  return (
    <div>
       <div className="flex items-center ml-40">
        <button onClick={handelOnClick} value={1} className="focus:outline-none focus:ring focus:ring-blue flex items-center focus w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2" >1D</button>
        <button onClick={handelOnClick} value={7} className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2 " >1W</button>
        <button onClick={handelOnClick} value={14} className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2 " >2W</button>
        <button onClick={handelOnClick} value={30} className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2 " >1M</button>
        <button onClick={handelOnClick} value={180} className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2 " >6M</button>
        <button onClick={handelOnClick} value={365} className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2 " >1Y</button>
    </div>
    </div>
  )
}
export default TimeButtons
