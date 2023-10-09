import React  from 'react';
import { useDispatch } from 'react-redux';
import { setTime } from '../slices/timeButtonSlice';

function TimeButtons() {
  const dispatch = useDispatch();

  // Handle button click event
  const handleOnClick = (e) => {
    // Dispatch the selected time interval to the Redux store
    dispatch(setTime(e.target.value));
  };

  return (
    <div>
      <div className="ml-4 flex items-center">
        {/* Buttons for different time intervals */}
        <button
          onClick={handleOnClick}
          value={1}
          className="focus:outline-none focus:ring focus:ring-blue flex items-center focus w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2"
        >
          1D
        </button>
        <button
          onClick={handleOnClick}
          value={7}
          className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2"
        >
          1W
        </button>
        <button
          onClick={handleOnClick}
          value={14}
          className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2"
        >
          2W
        </button>
        <button
          onClick={handleOnClick}
          value={30}
          className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2"
        >
          1M
        </button>
        <button
          onClick={handleOnClick}
          value={180}
          className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2"
        >
          6M
        </button>
        <button
          onClick={handleOnClick}
          value={365}
          className="focus:outline-none focus:ring focus:ring-blue flex items-center w-10 border border-gray-300 rounded bg-white text-gray-600 h-8 m-2 p-2"
        >
          1Y
        </button>
      </div>
    </div>
  );
}

export default TimeButtons;
