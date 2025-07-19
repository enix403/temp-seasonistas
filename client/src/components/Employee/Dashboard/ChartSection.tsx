"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const chartData = {
  today: [
    { date: "2025-05-30T09:00:00", views: 12 },
    { date: "2025-05-30T12:00:00", views: 28 },
    { date: "2025-05-30T15:00:00", views: 18 },
    { date: "2025-05-30T18:00:00", views: 32 },
    { date: "2025-05-30T21:00:00", views: 22 }
  ],
  last7: [
    { date: "2025-05-24", views: 200 },
    { date: "2025-05-25", views: 350 },
    { date: "2025-05-26", views: 250 },
    { date: "2025-05-27", views: 400 },
    { date: "2025-05-28", views: 480 },
    { date: "2025-05-29", views: 300 },
    { date: "2025-05-30", views: 700 }
  ],
  lastMonth: [
    { date: "2025-05-01", views: 650 },
    { date: "2025-05-05", views: 800 },
    { date: "2025-05-10", views: 420 },
    { date: "2025-05-15", views: 600 },
    { date: "2025-05-20", views: 300 },
    { date: "2025-05-25", views: 720 },
    { date: "2025-05-30", views: 900 }
  ]
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className='rounded-xl bg-[#365C5C] px-4 py-2 text-center text-white shadow'>
        <p className='mb-1 text-xs'>{formatDate(label)}</p>
        <p className='text-sm font-semibold'>{payload[0].value} views</p>
      </div>
    );
  }
  return null;
};

const ChartSection = () => {
  const [range, setRange] = useState<"today" | "last7" | "lastMonth">(
    "lastMonth"
  );
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className='h-[360px] w-full rounded-xl sm:bg-white sm:p-6 sm:shadow-sm'>
      {/* Header */}
      <div className='mb-4 flex items-center justify-between'>
        <div>
          <p className='text-[24px] leading-[28px] font-[400]'>Profile Views</p>
          <p className='leading-[22px] text-[#1C1C1EB8]'>(This Month)</p>
        </div>

        {/* Dropdown */}
        <div className='relative flex items-center gap-2'>
          <h2 className='text-[40px] leading-[48px] font-bold'>122</h2>
          <BsThreeDots
            className='cursor-pointer text-[#559093]'
            size={36} // ⬅️ Icon enlarged
            onClick={() => setShowDropdown(!showDropdown)}
          />

          {showDropdown && (
            <div className='absolute right-0 z-10 mt-2 w-36 rounded-lg bg-white p-2 shadow-lg'>
              <ul className='space-y-1 text-sm text-gray-700'>
                <li
                  className='cursor-pointer rounded px-3 py-2 hover:bg-gray-100'
                  onClick={() => {
                    setRange("today");
                    setShowDropdown(false);
                  }}
                >
                  Today
                </li>
                <li
                  className='cursor-pointer rounded px-3 py-2 hover:bg-gray-100'
                  onClick={() => {
                    setRange("last7");
                    setShowDropdown(false);
                  }}
                >
                  Last 7 Days
                </li>
                <li
                  className='cursor-pointer rounded px-3 py-2 hover:bg-gray-100'
                  onClick={() => {
                    setRange("lastMonth");
                    setShowDropdown(false);
                  }}
                >
                  Last Month
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className='relative -ml-[45px] h-full'>
        <ResponsiveContainer width='100%' height='80%'>
          <LineChart data={chartData[range]} margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray='3 3' vertical={false} />
            <XAxis
              dataKey='date'
              tick={{ fontSize: 12 }}
              tickFormatter={date =>
                new Date(date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short"
                })
              }
              padding={{ left: 20, right: 20 }}
            />
            <YAxis domain={[0, 1000]} tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type='monotone'
              dataKey='views'
              stroke='#467A7A'
              strokeWidth={3}
              dot={{ r: 5, stroke: "white", strokeWidth: 2, fill: "#467A7A" }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;
