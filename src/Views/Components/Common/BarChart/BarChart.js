import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  type: "bar",
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  options: {
    scales: {
      xAxis: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxis: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
  borderWidth: 0,
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Total Tickets",
      data: [12, 5, 8, 9, 11, 12, 6, 3, 7, 9, 4, 2],
      backgroundColor: ["rgb(108, 123, 255)"],
      borderWidth: 0,
    },
    {
      label: "Solved Tickets",
      data: [8, 9, 7, 4, 8, 1, 9, 5, 4, 9, 8, 6],
      backgroundColor: ["rgb(52, 221, 170)"],
      borderWidth: 0,
    },
  ],
};

const BarChart = () => {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
