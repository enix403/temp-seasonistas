"use client";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const weeklyData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Payments",
      data: [40, 45, 50, 30, 55, 60, 50],
      borderColor: "#10B981",
      backgroundColor: "rgba(16,185,129,0.1)",
      tension: 0.4,
      fill: true,
      pointRadius: 0
    },
    {
      label: "Registrations",
      data: [30, 25, 20, 50, 35, 45, 40],
      borderColor: "#F59E0B",
      backgroundColor: "rgba(245,158,11,0.1)",
      tension: 0.4,
      fill: true,
      pointRadius: 0
    },
    {
      label: "Reported Issues",
      data: [20, 30, 25, 35, 40, 38, 42],
      borderColor: "#EF4444",
      backgroundColor: "rgba(239,68,68,0.1)",
      tension: 0.4,
      fill: true,
      pointRadius: 0
    }
  ]
};

const monthlyData = {
  labels: [
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov"
  ],
  datasets: [
    {
      label: "Payments",
      data: [50, 40, 30, 90, 80, 100, 150, 100, 90, 60],
      borderColor: "#10B981",
      backgroundColor: "rgba(16,185,129,0.1)",
      tension: 0.4,
      fill: true,
      pointRadius: 0
    },
    {
      label: "Registrations",
      data: [40, 20, 10, 80, 100, 70, 50, 90, 85, 60],
      borderColor: "#F59E0B",
      backgroundColor: "rgba(245,158,11,0.1)",
      tension: 0.4,
      fill: true,
      pointRadius: 0
    },
    {
      label: "Reported Issues",
      data: [60, 70, 55, 60, 120, 90, 100, 110, 105, 95],
      borderColor: "#EF4444",
      backgroundColor: "rgba(239,68,68,0.1)",
      tension: 0.4,
      fill: true,
      pointRadius: 0
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: "#94A3B8",
        font: { size: 12 },
        stepSize: 50
      },
      grid: {
        color: "#F1F5F9"
      }
    },
    x: {
      ticks: {
        color: "#94A3B8",
        font: { size: 12 }
      },
      grid: { display: false }
    }
  }
};

const ChartCard = () => {
  const [mode, setMode] = useState<"Monthly" | "Weekly">("Monthly");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(e.target.value as "Monthly" | "Weekly");
  };

  return (
    <div className='h-full w-full rounded-2xl bg-white p-5'>
      {/* Header */}
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-[20px] leading-[30px] font-semibold text-[#1C252E]'>
          Weekly / Monthly Statistics
        </h2>
        <select
          value={mode}
          onChange={handleChange}
          className='rounded-lg bg-[#F4F6F8] px-4 py-2 text-[14px] text-[#11142D] focus:outline-none'
        >
          <option value='Monthly'>Last Month</option>
          <option value='Weekly'>Last Week</option>
        </select>
      </div>

      {/* Legends */}
      <div className='mb-3 flex flex-wrap gap-x-10 gap-y-4'>
        <div className='flex flex-col items-start gap-2 text-sm text-[#11142D]'>
          <div className='flex items-center justify-center gap-2'>
            <span className='h-3 w-3 rounded-full bg-[#10B981]'></span>
            <span>Payments</span>
          </div>
          <span className='ml-2 text-[20px] font-medium'>$234k</span>
        </div>
        <div className='flex flex-col items-start gap-2 text-sm text-[#11142D]'>
          <div className='flex items-center justify-center gap-2'>
            <span className='h-3 w-3 rounded-full bg-[#F59E0B]'></span>
            <span>Registrations</span>
          </div>
          <span className='ml-2 text-[20px] font-medium'>1,2k</span>
        </div>
        <div className='flex flex-col items-start gap-2 text-sm text-[#11142D]'>
          <div className='flex items-center justify-center gap-2'>
            <span className='h-3 w-3 rounded-full bg-[#EF4444]'></span>
            <span>Reported Issues</span>
          </div>
          <span className='ml-2 text-[20px] font-medium'>200</span>
        </div>
      </div>

      {/* Chart */}
      <Line
        data={mode === "Monthly" ? monthlyData : weeklyData}
        options={options}
        height={138}
      />
    </div>
  );
};

export default ChartCard;
