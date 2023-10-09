import { Chart } from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChart } from '../../slices/ChartDataSlice'; // Import the async thunk for fetching data

function HorizontalBarChart() {
  const chartRef = useRef(null);
  const ChartInstance = useRef(null);
  const dispatch = useDispatch();

  // Fetch relevant data from Redux state
  const chartData = useSelector((state) => state.chartData);
  const setTime = useSelector((state) => state.setTime.time);
  const setCoin = useSelector((state) => state.setCoin);
  const setCurrency = useSelector((state) => state.setCurrency);

  useEffect(() => {
    // Fetch data when the component mounts or when dependencies (setCoin, setCurrency, setTime) change
    dispatch(fetchChart({ setCoin, setCurrency, setTime }));
  }, [setCoin, setCurrency, setTime, dispatch]);

  useEffect(() => {
    if (ChartInstance.current) {
      // Destroy the existing chart instance to prevent memory leaks
      ChartInstance.current.destroy();
    }

    if (chartData.label.length === 0 || chartData.data.length === 0) {
      // Handle the case where data is not available yet
      return;
    }

    const mychartRef = chartRef.current.getContext('2d');

    // Create a new Chart instance with retrieved data
    ChartInstance.current = new Chart(mychartRef, {
      type: 'bar',
      data: {
        labels: chartData.label, // Use Redux state for labels
        datasets: [
          {
            borderColor: ['rgba(79, 121, 66, 1)'],
            barPercentage: 1.0,
            barThickness: 2,
            maxBarThickness: 5,
            minBarLength: 4,
            label: `${setCoin} Vs ${setCurrency}`,
            data: chartData.data, // Use Redux state for data
            backgroundColor: ['rgb(124, 252, 0)'],
          },
        ],
      },
      options: {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            align: 'end',
            labels: {
              usePointStyle: true,
            },
            position: 'top',
          },
          position: 'top',
          title: {
            display: true,
            text: 'Horizontal Bar Chart',
          },
        },
      },
    });
  }, [chartData]);

  return (
    <div className="bg-white border border-gray-300 rounded text-gray-600">
      <canvas ref={chartRef} /> {/* Render the chart canvas */}
    </div>
  );
}

export default HorizontalBarChart;
