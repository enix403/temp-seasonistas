"use client";

import Steps from "~/components/Employer/CreateJob/Steps";
import { useJobForm } from "../../../../../stores/useJobForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CreateJobModal from "~/components/Employer/CreateJob/CreateJobModal";

const CreateJobPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { formData } = useJobForm();
  const router = useRouter();

  if (!formData) return <p className='p-6 text-gray-500'>Data not found!</p>;

  const handleCancel = () => {
    router.push("/en/employer/dashboards");
  };
  const credit = 0;
  const handlePost = () => {
    if (credit < 1) {
      setShowModal(true); // show modal instead of returning JSX
    } else {
      alert("Post created successfully!");
      // proceed with the post submission logic
    }
  };

  return (
    <div className='space-y-6 py-6 sm:px-6'>
      <div className='flex items-center justify-between'>
        <div className='space-y-4'>
          <h1 className='text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
            Post
          </h1>
          <p className='text-sm leading-[22px] font-[400] text-[#1C252E]'>
            Overview <span className='text-[#919EAB]'>• Post Detail</span>
          </p>
        </div>
        <div className='flex flex-1 flex-wrap-reverse justify-end gap-4'>
          <button
            className='min-w-[100px] rounded-full border px-5 py-2 text-sm'
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className='min-w-[100px] rounded-full bg-[#559092] px-6 py-2 text-sm text-white'
            onClick={handlePost}
          >
            Post Now
          </button>
        </div>
      </div>

      {/* Grid */}
      <Steps formData={formData} />

      {showModal && <CreateJobModal setShowModal={setShowModal} />}
    </div>
  );
};

export default CreateJobPage;
