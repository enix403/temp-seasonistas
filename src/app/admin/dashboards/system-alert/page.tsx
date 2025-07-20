"use client";

import { FaTimesCircle } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";

const alerts = [
  {
    type: "Payment Failed",
    icon: <FaTimesCircle className='shrink-0 text-red-600' />,
    description: "Payment failed for user #1053 – Card declined",
    time: "2 mins ago"
  },
  {
    type: "Flagged Job",
    icon: <MdReportProblem className='shrink-0 text-red-500' />,
    description: "Job post #4021 flagged as spam by 3 users",
    time: "5 mins ago"
  },
  {
    type: "User Reported",
    icon: <RiErrorWarningFill className='shrink-0 text-red-400' />,
    description: "User #998 reported for abusive behavior in messages",
    time: "10 mins ago"
  },
  {
    type: "Blocked Payment",
    icon: <FaTimesCircle className='shrink-0 text-red-600' />,
    description: "Payment failed for user #1053 – Card declined",
    time: "15 mins ago"
  },
  {
    type: "Multiple Reports",
    icon: <RiErrorWarningFill className='shrink-0 text-red-400' />,
    description: "User #998 reported for abusive behavior in messages",
    time: "10 mins ago"
  },
  {
    type: "Job Abuse",
    icon: <MdReportProblem className='shrink-0 text-red-500' />,
    description: "Job post #4021 flagged as spam by 3 users",
    time: "15 mins ago"
  }
];

const SystemAlertsPage = () => {
  return (
    <div className='space-y-6'>
      <h1 className='text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        System Alerts
      </h1>

      <div className='overflow-x-auto rounded-2xl bg-white shadow-sm'>
        <h2 className='border-b px-4 py-4 text-[18px] leading-[22px] font-semibold sm:px-6 sm:py-6 sm:text-[22px]'>
          All Alerts
        </h2>

        <table className='w-full min-w-[700px] text-left text-sm text-gray-700'>
          <thead className='bg-[#F5F5F5] font-semibold text-gray-500'>
            <tr>
              <th className='px-4 py-3 whitespace-nowrap sm:px-6'>Alert</th>
              <th className='px-4 py-3 whitespace-nowrap sm:px-6'>
                Description
              </th>
              <th className='px-4 py-3 whitespace-nowrap sm:px-6'>Time</th>
              <th className='px-4 py-3 whitespace-nowrap sm:px-6'>Action</th>
            </tr>
          </thead>
          <tbody className='text-[#1C252E]'>
            {alerts.map((alert, idx) => (
              <tr key={idx} className='border-t'>
                <td className='px-4 py-4 font-medium whitespace-nowrap sm:px-6'>
                  {alert.type}
                </td>
                <td className='flex items-center gap-2 px-4 py-4 sm:px-6'>
                  {alert.icon}
                  <span className='break-words'>{alert.description}</span>
                </td>
                <td className='px-4 py-4 whitespace-nowrap sm:px-6'>
                  {alert.time}
                </td>
                <td className='cursor-pointer px-4 py-4 whitespace-nowrap text-[#1C252E] underline sm:px-6'>
                  Preview
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemAlertsPage;
