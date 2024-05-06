import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Typing Speed with and without Limited Range of Motion',
    },
  },
};

const labels = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Average Two Hands (WPM)',
      data: [94, 104.5, 101.5, 86, 96],
      backgroundColor: 'rgba(32, 85, 8, 0.5)',
    },
    {
      label: 'Average One Hand (WPM)',
      data: [34.5, 38, 34.5, 38.5, 32],
      backgroundColor: 'rgba(240, 216, 69, 0.5)',
    },
  ],
};

export default function Chart() {
    return <Bar options={options} data={data} className="h-[40vh]" />;
  }