"use client";

import { useState } from "react";
import BillingMethod from "@/components/Employee/Settings/BillingMethod";
import NotificationSettings from "@/components/Employee/Settings/NotificationSettings";
import Preferences from "@/components/Employee/Settings/Preferences";
import SecuritySettings from "@/components/Employee/Settings/SecuritySettings";

const SettingsPage = () => {
  const [tab, setTab] = useState<
    "security" | "notification" | "billing" | "preferences"
  >("security");

  return (
    <div className='space-y-6 px-4 py-6 sm:px-6'>
      {/* Tabs */}
      <div className='no-scrollbar flex space-x-6 overflow-x-auto border-b sm:space-x-8'>
        <button
          onClick={() => setTab("security")}
          className={`pb-2 text-[16px] whitespace-nowrap sm:text-[18px] ${tab === "security" ? "border-b-2 border-[#559092] font-semibold text-black" : "text-[#767676]"}`}
        >
          Security Settings
        </button>
        <button
          onClick={() => setTab("notification")}
          className={`pb-2 text-[16px] whitespace-nowrap sm:text-[18px] ${tab === "notification" ? "border-b-2 border-[#559092] font-semibold text-black" : "text-[#767676]"}`}
        >
          Notification
        </button>
        <button
          onClick={() => setTab("billing")}
          className={`pb-2 text-[16px] whitespace-nowrap sm:text-[18px] ${tab === "billing" ? "border-b-2 border-[#559092] font-semibold text-black" : "text-[#767676]"}`}
        >
          Billing Method
        </button>
        <button
          onClick={() => setTab("preferences")}
          className={`pb-2 text-[16px] whitespace-nowrap sm:text-[18px] ${tab === "preferences" ? "border-b-2 border-[#559092] font-semibold text-black" : "text-[#767676]"}`}
        >
          Preferences
        </button>
      </div>

      {/* Render Selected Tab */}
      <div className='w-full'>
        {tab === "security" && <SecuritySettings />}
        {tab === "notification" && <NotificationSettings />}
        {tab === "billing" && <BillingMethod />}
        {tab === "preferences" && <Preferences />}
      </div>
    </div>
  );
};

export default SettingsPage;
