import React from 'react';
import { setChart } from '../../slices/ChartOptionSlices';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function CryptoCurrencyDropDown() {
  const dispatch = useDispatch();

  // Fetch the current chart type from Redux state
  const chartType = useSelector((state) => state.ChartOption);

  // Function to handle the dropdown selection change
  const handleOnChange = (e) => {
    dispatch(setChart(e.target.value)); // Dispatch the selected chart type to Redux
  }

  return (
    <div className="relative inline-flex lg:mx-6 md:mx-4">
      <select
        value={chartType}
        onChange={handleOnChange} 
        className="border border-gray-300 rounded text-gray-600 h-10 pl-2 pr-4 bg-white hover:border-gray-400 focus:outline-none appearance-none"
      >
        <option value="LineChart">LineChart</option>
        <option value="HorizontalBarChart">Horizontal BarChart</option>
        <option value="VerticalBarChart">Vertical BarChart</option>
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

export default CryptoCurrencyDropDown;
