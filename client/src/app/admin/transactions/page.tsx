"use client";

import { HiOutlineSearch } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import companyLogo from "@/assets/Admin/companyLogo.png";
import personLogo from "@/assets/Admin/person.png";
import MetricCard2 from "~/components/Admin/Transactions/MetricCard2";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import RefundModal from "~/components/Admin/Modal/RefundModal";

const transactions = [
  {
    user: "Ali Hassan",
    isCompany: false,
    plan: "Basic Plan",
    date: "2025-05-15",
    price: "$1200",
    method: "Stripe",
    status: "Success"
  },
  {
    user: "Linear company",
    isCompany: true,
    plan: "Basic Plan",
    date: "2025-05-15",
    price: "$1200",
    method: "Stripe",
    status: "Refunded"
  },
  {
    user: "Ali Hassan",
    isCompany: false,
    plan: "Basic Plan",
    date: "2025-05-15",
    price: "$1200",
    method: "Stripe",
    status: "Success"
  },
  {
    user: "Linear company",
    isCompany: true,
    plan: "Basic Plan",
    date: "2025-05-15",
    price: "$1200",
    method: "Stripe",
    status: "Refunded"
  },
  {
    user: "Ali Hassan",
    isCompany: false,
    plan: "Basic Plan",
    date: "2025-05-15",
    price: "$1200",
    method: "Stripe",
    status: "Success"
  },
  {
    user: "Linear company",
    isCompany: true,
    plan: "Basic Plan",
    date: "2025-05-15",
    price: "$1200",
    method: "Stripe",
    status: "Refunded"
  },
  {
    user: "Ali Hassan",
    isCompany: false,
    plan: "Basic Plan",
    date: "2025-05-15",
    price: "$1200",
    method: "Stripe",
    status: "Success"
  },
  {
    user: "Linear company",
    isCompany: true,
    plan: "Basic Plan",
    date: "2025-05-15",
    price: "$1200",
    method: "Stripe",
    status: "Refunded"
  }
];

export default function Transactions() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [showRefundModal, setShowRefundModal] = useState(false);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <div className='w-full'>
      <h1 className='mb-6 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Transactions
      </h1>

      {/* Stat Boxes */}
      <div className='mb-6 grid gap-5 md:grid-cols-3'>
        <MetricCard2
          title='Today’s Revenue'
          value='120$'
          barColor='#00A76F'
          bars={[10, 10, 15, 5, 8, 20, 7, 16]}
        />
        <MetricCard2
          title='This Month'
          value='1452$'
          barColor='#559093'
          bars={[5, 6, 20, 25, 3, 17, 16]}
        />
        <MetricCard2
          title='Total Refunded'
          value='78$'
          barColor='#FF5630'
          bars={[5, 6, 3, 20, 25, 3, 17, 16]}
        />
      </div>

      {/* Filter Bar */}
      <div className='w-full'>
        <div className='mb-10 w-full overflow-x-auto rounded-2xl bg-white shadow-sm'>
          <h1 className='p-6 text-[22px] font-semibold text-[#1C252E]'>
            All Transaction
          </h1>
          <div className='flex flex-wrap items-center justify-between gap-4 px-6 pb-5'>
            <div className='relative min-w-[200px] flex-1'>
              <HiOutlineSearch
                className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-400'
                size={18}
              />
              <input
                type='text'
                placeholder='Search User'
                className='w-full rounded-full border border-[#E2E8F0] py-3 pr-4 pl-10 text-sm placeholder:text-gray-400'
              />
            </div>
            {["Date", "Status"].map((filter, i) => (
              <div key={i} className='relative'>
                <select className='appearance-none rounded-full border border-gray-300 bg-white px-4 py-3 pr-8 text-sm text-gray-600'>
                  <option>Filter By {filter}</option>
                </select>
                <IoIosArrowDown className='pointer-events-none absolute top-4 right-3 text-gray-500' />
              </div>
            ))}
          </div>

          <table className='w-full text-left text-sm text-[#1C252E]'>
            <thead className='bg-[#F5F5F5] font-medium text-[#637381]'>
              <tr>
                <th className='px-6 py-4'>User Name</th>
                <th className='px-6 py-4'>Plan Name</th>
                <th className='px-6 py-4'>Date</th>
                <th className='px-6 py-4'>Price</th>
                <th className='px-6 py-4'>Method</th>
                <th className='px-6 py-4'>Status</th>
                <th className='px-6 py-4'></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, idx) => (
                <tr key={idx} className='border-t hover:bg-[#F9FAFB]'>
                  <td className='mt-1 flex items-center gap-2 px-6 py-5'>
                    {t.isCompany ? (
                      <>
                        <Image
                          src={companyLogo}
                          alt='logo'
                          className='h-7 w-7 rounded-md'
                        />
                        {t.user}
                      </>
                    ) : (
                      <div className='flex h-9 w-9 items-center gap-2 rounded-full'>
                        <Image
                          src={personLogo}
                          alt='avatar'
                          className='h-full w-full rounded-full object-cover'
                        />
                        <p className='whitespace-nowrap'>{t.user}</p>
                      </div>
                    )}
                  </td>
                  <td className='px-6 py-5'>{t.plan}</td>
                  <td className='px-6 py-5'>{t.date}</td>
                  <td className='px-6 py-5'>{t.price}</td>
                  <td className='px-6 py-5'>{t.method}</td>
                  <td className='px-6 py-5'>
                    <span
                      className={`rounded-full px-4 py-[4px] text-xs font-medium ${
                        t.status === "Success"
                          ? "bg-[#DCFCE7] text-[#15803D]"
                          : "bg-[#FDEEEE] text-[#D84C4C]"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                  <td className='relative px-6 py-5'>
                    <button
                      onClick={() => toggleDropdown(idx)}
                      className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F5F5F5] text-gray-500 hover:bg-[#E2E8F0]'
                    >
                      <FiMoreVertical size={16} />
                    </button>
                    {openDropdown === idx && (
                      <div className='absolute top-14 right-6 z-10 w-48 rounded-xl bg-white py-2 text-sm text-black shadow-md'>
                        <button
                          onClick={() => {
                            setShowRefundModal(true);
                            setOpenDropdown(null);
                          }}
                          className='w-full px-4 py-2 text-left hover:bg-gray-100'
                        >
                          Refund
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showRefundModal && (
        <RefundModal
          onClose={() => setShowRefundModal(false)}
          onConfirm={() => {
            console.log("Refund confirmed");
            setShowRefundModal(false);
          }}
        />
      )}
    </div>
  );
}
