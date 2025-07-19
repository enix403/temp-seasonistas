"use client";
import { useState } from "react";
import JobFormModal from "./JobFormModal";

type Props = {
  used: number;
  total: number;
  plan: string;
  price: number;
};
const UsageCard = ({ used, total, plan, price }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const percentage = Math.round((used / total) * 100);

  return (
    <>
      <div className='h-[162px] space-y-4 rounded-xl bg-white p-6 shadow-sm'>
        <div className='flex items-start justify-between'>
          <h4 className='text-[18px] leading-[24px] font-[600]'>Ad Usage</h4>
          <button
            className='rounded-full bg-[#559093] px-4 py-1 text-xs text-white'
            onClick={() => setOpenModal(true)}
          >
            Create Ad
          </button>
        </div>

        {/* Progress */}
        <div className='mt-2 flex flex-col gap-1'>
          <div className='flex items-start justify-between'>
            <p className='text-[14px] font-[400]'>
              You’ve used {used} of {total} ads
            </p>
            <p className='text-[14px] font-[400]'>{percentage}%</p>
          </div>
          <div className='h-2 overflow-hidden rounded-full bg-gray-200'>
            <h2
              className='h-2 bg-[#559092]'
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className='flex items-start justify-between'>
          <div>
            <p className='text-sm font-semibold'>{plan}</p>
            <p className='text-xs text-gray-500'>Expire Until 25/01/2027</p>
          </div>
          <h2 className='mt-1 text-2xl font-bold'>
            {price}
            <span className='text-[17px] leading-[40px] font-[400]'>/mo</span>
          </h2>
        </div>
      </div>

      {openModal && <JobFormModal onClose={() => setOpenModal(false)} />}
    </>
  );
};

export default UsageCard;
