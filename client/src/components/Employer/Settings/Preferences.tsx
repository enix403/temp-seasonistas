"use client";
import React from "react";

import { useForm } from "react-hook-form";

type FormValues = {
  currency: "EUR" | "USD";
  rateType: "month" | "week" | "day";
};

export default function Preferences() {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      currency: "EUR",
      rateType: "month"
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-1/3 space-y-4 rounded-lg border p-4'
    >
      {/* Currency Select */}
      <div>
        <label className='mb-1 block font-medium'>Currency</label>
        <select
          {...register("currency")}
          className='w-full rounded border px-2 py-2'
        >
          <option value='EUR'>€ Euro</option>
          <option value='USD'>$ Dollar</option>
        </select>
      </div>

      {/* Rate Type Select */}
      <div>
        <label className='mb-1 block font-medium'>Rate Type</label>
        <select
          {...register("rateType")}
          className='w-full rounded border px-2 py-2'
        >
          <option value='month'>Per Month</option>
          <option value='week'>Per Week</option>
          <option value='day'>Per Day</option>
        </select>
      </div>

      <button className='w-max rounded-full bg-[#559093] px-6 py-2 text-sm font-semibold text-white'>
        Save
      </button>
    </form>
  );
}
