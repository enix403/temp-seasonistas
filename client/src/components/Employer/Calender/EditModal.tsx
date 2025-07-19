"use client";

import { useForm } from "react-hook-form";

type EditFormValues = {
  jobRole: string;
  date: string;
  time: string;
  location: string;
};

const EditModal = ({
  onClose,
  onConfirm
}: {
  onClose: () => void;
  onConfirm: (data: EditFormValues) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<EditFormValues>();

  const onSubmit = (data: EditFormValues) => {
    onConfirm(data);
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
      <div className='mx-4 w-full max-w-sm space-y-6 rounded-2xl bg-white px-6 py-6 text-left sm:mx-0'>
        <h2 className='text-[16px] font-semibold text-[#1C1C1E]'>
          Edit Job Details
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <label className='mb-1 block text-sm text-gray-700'>Job Role</label>
            <input
              {...register("jobRole", { required: "Job role is required" })}
              className='w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none'
              placeholder='Enter job role'
            />
            {errors.jobRole && (
              <p className='mt-1 text-xs text-red-500'>
                {errors.jobRole.message}
              </p>
            )}
          </div>

          <div>
            <label className='mb-1 block text-sm text-gray-700'>Date</label>
            <input
              type='date'
              {...register("date", { required: "Date is required" })}
              className='w-full rounded-md border px-3 py-2 text-sm'
            />
            {errors.date && (
              <p className='mt-1 text-xs text-red-500'>{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className='mb-1 block text-sm text-gray-700'>Time</label>
            <input
              type='time'
              {...register("time", { required: "Time is required" })}
              className='w-full rounded-md border px-3 py-2 text-sm'
            />
            {errors.time && (
              <p className='mt-1 text-xs text-red-500'>{errors.time.message}</p>
            )}
          </div>

          <div>
            <label className='mb-1 block text-sm text-gray-700'>Location</label>
            <input
              {...register("location", { required: "Location is required" })}
              className='w-full rounded-md border px-3 py-2 text-sm'
              placeholder='Enter location'
            />
            {errors.location && (
              <p className='mt-1 text-xs text-red-500'>
                {errors.location.message}
              </p>
            )}
          </div>

          <div className='flex justify-end gap-3 pt-2'>
            <button
              type='button'
              onClick={onClose}
              className='rounded-full border border-[#E0E0E0] px-6 py-[10px] text-sm text-[#1C1C1E]'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-full bg-[#3B82F6] px-6 py-[10px] text-sm font-medium text-white'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
