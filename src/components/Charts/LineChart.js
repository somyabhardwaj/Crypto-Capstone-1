import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';


function LineChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(myChartRef, {
      type: 'line',

      data: {
        labels: ['jan', 'feb', 'mar', 'jan', 'feb', 'mar', 'jan', 'feb', 'mar', 'jan', 'feb', 'mar'],
        datasets: [{
          label: 'line',
          data: [65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 202],
          fill: false,
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
          tension: 0.1,
          borderWidth: 2,

        }],
      },
      options: {
        plugins: {
          legend: {
            size: 8,
            align: 'end',
            labels: {
              font: {
                size: 12,
              },
              usePointStyle: true,
            },
          }
        }
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="ml-4 w-11/12 bg-white border border-gray-300 rounded text-gray-600" >
      <canvas ref={chartRef} />
    </div>

  );
}

export default LineChart;
