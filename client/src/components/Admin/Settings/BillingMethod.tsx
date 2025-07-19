"use client";

import Image from "next/image";
import avatar from "@/assets/employer/dashboard/applicant2.png";
import { GoPlus } from "react-icons/go";
import { useRouter } from "next/navigation";

const transactions = [
  {
    admin: "Linear company",
    plan: "Professional",
    date: "Nov 22, 2025",
    status: "error",
    amount: "$250.00",
    period: "1 Month"
  },
  {
    admin: "Trainline",
    plan: "Professional",
    date: "Feb 15, 2026",
    status: "Paid",
    amount: "$250.00",
    period: "1 Month"
  },
  {
    admin: "Loom",
    plan: "Professional",
    date: "Mar 05, 2024",
    status: "error",
    amount: "$250.00",
    period: "1 Month"
  },
  {
    admin: "Trainline",
    plan: "Professional",
    date: "Dec 10, 2025",
    status: "Paid",
    amount: "$250.00",
    period: "1 Month"
  }
];

const BillingMethod = () => {
  const router = useRouter();
  return (
    <div className='space-y-6 sm:px-4 md:px-0'>
      {/* Top cards */}
      <div className='flex flex-col flex-wrap gap-4 md:flex-row'>
        <div className='w-full space-y-3 rounded-xl bg-white p-6 shadow-sm md:w-[400px]'>
          <div className='flex items-center justify-between'>
            <p className='text-[18px] leading-[24px] font-semibold'>
              Add Usage
            </p>
            <button className='rounded-full bg-[#559093] px-4 py-2 text-[12px] font-medium text-white'>
              Plan Renew
            </button>
          </div>
          <div className='space-y-1'>
            <div className='flex items-center justify-between text-sm font-normal'>
              <p>You've used 4 of 10 ads</p>
              <p>40%</p>
            </div>
            <div className='h-[7px] w-full overflow-hidden rounded-full bg-[#D9D9D9]'>
              <div className='h-[7px] bg-[#559092]' style={{ width: "40%" }} />
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='mt-3'>
              <p className='text-[16px] leading-[24px] font-semibold'>
                Professional Plan
              </p>
              <p className='text-xs font-normal text-[#767676]'>
                Expire Until 25 Jan 2027
              </p>
            </div>
            <h2 className='text-[24px] font-semibold'>
              18<span className='text-[17px] font-normal'>/mo</span>
            </h2>
          </div>
        </div>

        <div className='flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-white p-6 shadow-sm md:w-[400px]'>
          <button className='rounded-full bg-[#DFE5E8] p-2'>
            <GoPlus size={25} />
          </button>
          <p className='text-center text-[16px] leading-[24px] font-semibold tracking-wider'>
            Add Payment Method
          </p>
        </div>
      </div>

      {/* Transaction Table */}
      <div className='rounded-xl bg-white p-4 shadow-sm md:p-6'>
        <h2 className='mb-4 text-[18px] leading-[24px] font-semibold'>
          Transaction History
        </h2>
        <div className='overflow-x-auto'>
          <table className='w-full min-w-[700px] text-left text-sm'>
            <thead className='bg-[#F5F5F5] leading-[24px] font-semibold text-[#637381]'>
              <tr>
                <th className='p-4 md:p-6'>Billing Admin</th>
                <th className='p-4 md:p-6'>Plan Name</th>
                <th className='p-4 md:p-6'>Billing Date</th>
                <th className='p-4 md:p-6'>Status</th>
                <th className='p-4 md:p-6'>Amount</th>
                <th className='p-4 md:p-6'>Time Period</th>
                <th className='p-4 md:p-6'>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item, idx) => (
                <tr
                  key={idx}
                  className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t`}
                >
                  <td className='flex items-center gap-2 p-4 md:p-6'>
                    <div className='h-[32px] w-[32px]'>
                      <Image
                        src={avatar}
                        alt='admin'
                        width={60}
                        height={60}
                        className='h-full w-full rounded-full object-cover'
                      />
                    </div>
                    <p className='text-[12px] leading-[22px] font-normal'>
                      {item.admin}
                    </p>
                  </td>
                  <td className='p-4 text-[12px] leading-[22px] font-normal md:p-6'>
                    {item.plan}
                  </td>
                  <td className='p-4 text-[12px] leading-[22px] font-normal md:p-6'>
                    {item.date}
                  </td>
                  <td className='p-4 md:p-6'>
                    <span
                      className={`rounded-full px-4 py-[6px] text-[12px] leading-[22px] font-normal ${
                        item.status === "Paid"
                          ? "border border-[#22C55E] bg-[#22C55E2B] text-[#22C55E]"
                          : "border border-[#D95057] bg-[#D950572B] text-[#D95057]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className='p-4 text-[12px] leading-[22px] font-normal md:p-6'>
                    {item.amount}
                  </td>
                  <td className='p-4 text-[12px] leading-[22px] font-normal md:p-6'>
                    {item.period}
                  </td>
                  <td className='p-4 md:p-6'>
                    <button className='text-[12px] leading-[22px] font-normal underline'>
                      View Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillingMethod;
