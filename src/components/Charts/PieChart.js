import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function PieChart() {
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

    // Create a new Chart.js instance for a pie chart
    chartInstance.current = new Chart(myChartRef, {
      type: 'pie', // Pie chart type

      // Data for the chart
      data: {
        labels: ['Red', 'Blue', 'Yellow'], // Labels for the segments
        datasets: [
          {
            label: 'My First Dataset', // Dataset label
            data: [150, 150, 150], // Data values for the segments
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'], // Background colors for the segments
            hoverOffset: 4, // Offset when hovering over a segment
          },
        ],
      },

      // Chart options
      options: {
        plugins: {
          legend: {
            position: 'right', // Legend position on the right side
            labels: {
              usePointStyle: true, // Show legend colors as circles
            },
          },
        },
        aspectRatio: 1.8, // Disable maintaining aspect ratio
      },
    });

    // Clean up function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="mt-3 ml-12 w-1/2 border border-gray-300 bg-white rounded text-gray-600 p-2">
      <div className="flex justify-between">
        <h1 className="font-bold">Portfolio</h1>
        <p>Total Value <span className="font-bold">$1000</span></p>
      </div>
      <canvas className="p-1 m-2" ref={chartRef} /> {/* Render the chart canvas */}
    </div>
  );
}

export default PieChart;
