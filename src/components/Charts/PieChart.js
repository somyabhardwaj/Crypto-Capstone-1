import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function PieChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(myChartRef, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [150, 150, 150],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            hoverOffset: 4,
          },
        ],
      },

      options: {
        plugins: {
          legend: {
            position:'right',
            labels: {
              usePointStyle: true, // Show legend colors as circles
            },
          },
        },
         // Disable maintaining aspect ratio
        aspectRatio:1.8,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-1/2 border border-gray-300 rounded text-gray-600 p-2">
      <div className="flex justify-between">
      <h1 className="font-bold">Portfolio</h1>
      <p>Total Value <span className="font-bold">$1000</span></p>
      </div>
      <canvas className="p-1 m-2" ref={chartRef} />
    </div>
  );
}

export default PieChart;
