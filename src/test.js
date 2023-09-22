import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function App() {
  const data = {
    labels: ['mon', 'tues', 'thus', 'fri'],
    datasets: [
      {
        label: 'Weekdays',
        data: [30, 33, 35],
        borderColor: 'aqua',
        tension: 0.4
      }
    ]
  };

  const options = {}; // You can specify chart options here if needed

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}

export default App;
