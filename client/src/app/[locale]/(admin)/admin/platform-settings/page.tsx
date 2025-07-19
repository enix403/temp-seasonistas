"use client";

import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import EditPlanModal from "~/components/Admin/Modal/EditPlanModal";

const plans = [
  {
    name: "Basic Plan",
    price: "$500",
    posts: "5 Posts",
    validity: "15 Days",
    chat: "OFF",
    notification: "Disabled"
  },
  {
    name: "Standard Plan",
    price: "$1200",
    posts: "15 Posts",
    validity: "30 Days",
    chat: "ON",
    notification: "Enabled"
  },
  {
    name: "Premium",
    price: "$1600",
    posts: "30 Posts",
    validity: "60 Days",
    chat: "ON",
    notification: "Enabled"
  },
  {
    name: "Enterprise",
    price: "$2000",
    posts: "60 Posts",
    validity: "90 Days",
    chat: "ON",
    notification: "Enabled"
  }
];

export default function PlatformPlansPage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleEdit = plan => {
    setSelectedPlan(plan);
    setShowEditModal(true);
  };

  return (
    <div className='w-full'>
      <h1 className='mb-6 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Platform Settings
      </h1>

      <div className='w-full overflow-x-auto rounded-2xl bg-white shadow-sm'>
        <h2 className='px-6 py-5 text-[18px] font-semibold text-[#1C252E]'>
          All Plans
        </h2>

        <table className='w-full text-left text-sm text-[#1C252E]'>
          <thead className='bg-[#F5F5F5] font-medium text-[#637381]'>
            <tr>
              <th className='px-6 py-4'>Plan Name</th>
              <th className='px-6 py-4'>Price</th>
              <th className='px-6 py-4'>Posts</th>
              <th className='px-6 py-4'>Validity (Days)</th>
              <th className='px-6 py-4'>Chat</th>
              <th className='px-6 py-4'>Notification</th>
              <th className='px-6 py-4'></th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, idx) => (
              <tr key={idx} className='border-t hover:bg-[#F9FAFB]'>
                <td className='px-6 py-5'>{plan.name}</td>
                <td className='px-6 py-5'>{plan.price}</td>
                <td className='px-6 py-5'>{plan.posts}</td>
                <td className='px-6 py-5'>{plan.validity}</td>
                <td className='px-6 py-5'>{plan.chat}</td>
                <td className='px-6 py-5'>
                  <span
                    className={`rounded-full border-[0.6px] px-4 py-2 text-xs font-medium ${
                      plan.notification === "Enabled"
                        ? "border-[#22C55E] bg-[#22C55E2B] text-[#22C55E]"
                        : "border-[#D95057] bg-[#D950572B] text-[#D95057]"
                    }`}
                  >
                    {plan.notification}
                  </span>
                </td>
                <td className='px-6 py-5'>
                  <button
                    onClick={() => handleEdit(plan)}
                    className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F1F5F9] text-gray-500 hover:bg-[#E2E8F0]'
                  >
                    <FiEdit2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showEditModal && selectedPlan && (
        <EditPlanModal
          plan={selectedPlan}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
}
