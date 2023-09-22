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
          label: 'Line Chart',
          data: [65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 65, 59, 80, 202],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          borderWidth: 2,
        }],
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full border border-gray-300 rounded text-gray-600" >
     <canvas ref={chartRef} />
</div>
    
  );
}

export default LineChart;
