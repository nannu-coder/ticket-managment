import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    y: {
      max: 100,
    },
  },
};

const labels = ["Sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      fillColor: "red",
      backgroundColor: "rgba(108, 123, 255, .7)",
      borderColor: "#05deb3",
      tension: 0.3,
    },
  ],
};

const LineChart = () => {
  return (
    <div width="100%" style={{ paddingTop: "164px" }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
