import { Chart } from 'chart.js';
import React, { useEffect, useRef } from 'react'

function BarChart() {
    const chartRef =useRef(null)
    const ChartInstance = useRef(null)

    useEffect(() =>{

        if(ChartInstance.current){
            ChartInstance.current.destroy();
        }

        const mychartRef = chartRef.current.getContext('2d');

        ChartInstance.current = new Chart(mychartRef,{
            type: 'bar',
  data: {labels: ['Red', 'Blue', 'Yellow','Red', 'Blue', 'Yellow','Red', 'Blue', 'Yellow','Red', 'Blue', 'Yellow'], // Labels for the segments
  datasets: [
    {
      label: 'My First Dataset', // Dataset label
      data: [150, 150, 150], // Data values for the segments
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'], // Background colors for the segments
      hoverOffset: 4, // Offset when hovering over a segment
    },
    {
        label: 'My First Dataset', // Dataset label
        data: [150, 150, 150], // Data values for the segments
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'], // Background colors for the segments
        hoverOffset: 4, // Offset when hovering over a segment
      },
  ],},
  options: {
    responsive: true,
    plugins: {
      legend: {indexAxis: 'y',
        labels:{
            usePointStyle:true,
        },
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  },
        })
    }); 
  return (
    <div className=" bg-white border border-gray-300 rounded text-gray-600">
      <canvas ref={chartRef} /> {/* Render the chart canvas */}
    </div>
  )
}

export default BarChart
