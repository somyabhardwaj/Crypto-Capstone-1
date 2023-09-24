import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function LineChart() {
  // Create a reference for the chart canvas element
  const chartRef = useRef(null);

  // Create a reference for the chart instance
  const chartInstance = useRef(null);

  // useEffect hook to initialize and update the chart
  useEffect(() => {
    // Check if there is a previous chart instance and destroy it
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Get the 2D rendering context of the chart canvas
    const myChartRef = chartRef.current.getContext('2d');

    // Create a new Chart.js instance with configuration
    chartInstance.current = new Chart(myChartRef, {
      type: 'line', // Line chart type

      // Data for the chart
      data: {
        labels: ['jan', 'feb', 'mar', 'jan', 'feb', 'mar', 'jan', 'feb', 'mar', 'jan', 'feb', 'mar'],
        datasets: [{
          label: 'line', // Label for the dataset
          data: [65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 202], // Data points
          fill: false, // Do not fill the area under the line
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'], // Background color for the line
          tension: 0.1, // Line tension
          borderWidth: 2, // Border width
        }],
      },

      // Chart options
      options: {
        plugins: {
          legend: {
            size: 8, // Legend size
            align: 'end', // Legend alignment
            labels: {
              font: {
                size: 12, // Legend label font size
              },
              usePointStyle: true, // Use point-style legend markers
            },
          },
        },
      },
    });

    // Clean up function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    <div className="ml-4 w-11/12 bg-white border border-gray-300 rounded text-gray-600">
      <canvas ref={chartRef} /> {/* Render the chart canvas */}
    </div>
  );
}

export default LineChart;
