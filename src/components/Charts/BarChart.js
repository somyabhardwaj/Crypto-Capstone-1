import { Chart } from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChart } from '../../slices/ChartDataSlice'; // Import the async thunk for fetching data

function BarChart() {
  const chartRef = useRef(null);
  const ChartInstance = useRef(null);
  const dispatch = useDispatch();
  const chartData = useSelector((state) => state.chartData);

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchChart());
  }, [dispatch]);

  useEffect(() => {
    if (ChartInstance.current) {
      ChartInstance.current.destroy();
    }

    if (chartData.label.length === 0 || chartData.data.length === 0) {
      // Handle the case where data is not available yet
      return;
    }

    const mychartRef = chartRef.current.getContext('2d');

    ChartInstance.current = new Chart(mychartRef, {
      type: 'bar',
      data: {
        labels: chartData.label, // Use Redux state for labels
        datasets: [
          {
            label: 'Ethereum Price (USD)',
            data: chartData.data, // Use Redux state for data
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            align: 'end',
            
            labels: {
              usePointStyle: true,
            },
            position: 'top',
          },
          title: {
            display: true,
            text: 'Bar Chart',
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

export default BarChart;
