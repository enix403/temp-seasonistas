"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { useJobForm } from "@/stores/useJobForm";

const JobFormModal = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<{
    title: string;
    category: string;
    specialism: string;
    description: string;
    responsibility: string;
    requirements: string;
    location: string;
    salary: string;
    type: string;
    skills: string;
    deadline: string;
    detail: string;
    q1: string;
    q2: string;
    q3: string;
    q4: string;
    cv: File | null;
  }>({
    title: "",
    category: "",
    specialism: "",
    description: "",
    responsibility: "",
    requirements: "",
    location: "",
    salary: "",
    type: "",
    skills: "",
    deadline: "",
    detail: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    cv: null
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const requiredFields: Record<number, string[]> = {
    1: ["title", "category", "specialism", "description"],
    2: ["responsibility", "requirements", "location"],
    3: ["salary", "type", "skills", "deadline", "detail"],
    4: ["q1", "q2", "q3", "q4"]
  };

  const nextStep = () => {
    const fieldsToCheck = requiredFields[step];
    const emptyField = fieldsToCheck.find(key => {
      const value = formData[key as keyof typeof formData];
      return typeof value === "string" ? value.trim() === "" : value === null;
    });

    if (emptyField) {
      alert(`Please fill in the "${emptyField}" field.`);
      return;
    }

    if (step < 4) {
      setStep(step + 1);
    } else {
      useJobForm.getState().setFormData(formData); // ✅ Save to global state
      router.push("/employer/create-job"); // ✅ Navigate to review page
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
      <div className='relative w-[90%] max-w-md rounded-2xl bg-white p-6'>
        <button onClick={onClose} className='absolute top-4 right-4 text-xl'>
          <IoClose />
        </button>

        <h2 className='mb-4 text-xl font-semibold'>Create Your Ideal Job</h2>

        {/* Steps */}
        <div className='mb-6 flex justify-between'>
          {[1, 2, 3, 4].map(s => (
            <div
              key={s}
              className={`flex-1 border-b-2 pb-1 text-center text-sm font-medium ${
                s === step
                  ? "border-[#F3C44D] text-[#F3C44D]"
                  : s < step
                    ? "border-green-600 text-green-600"
                    : "border-gray-300 text-gray-400"
              }`}
            >
              Step {s}
            </div>
          ))}
        </div>

        {/* Step Forms */}
        {step === 1 && (
          <div className='space-y-3'>
            <input
              name='title'
              placeholder='Job Title'
              value={formData.title}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />
            <input
              name='category'
              placeholder='Job Category'
              value={formData.category}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />
            <input
              name='specialism'
              placeholder='Specialism'
              value={formData.specialism}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />
            <textarea
              name='description'
              placeholder='Job Description'
              value={formData.description}
              onChange={handleChange}
              className='Employer-dashboard-input h-24 !rounded-[18px]'
            />
          </div>
        )}

        {step === 2 && (
          <div className='space-y-3'>
            <input
              name='responsibility'
              placeholder='Responsibility'
              value={formData.responsibility}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />
            <input
              name='requirements'
              placeholder='Requirements'
              value={formData.requirements}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />
            <input
              name='location'
              placeholder='Enter Location'
              value={formData.location}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />
          </div>
        )}

        {step === 3 && (
          <div className='space-y-3'>
            <input
              name='salary'
              placeholder='Salary'
              value={formData.salary}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />
            <input
              name='type'
              placeholder='Job Type'
              value={formData.type}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />
            <input
              name='skills'
              placeholder='Required Skills'
              value={formData.skills}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />
            <div className='relative'>
              <input
                type='text'
                name='deadline'
                value={formData.deadline}
                onChange={handleChange}
                placeholder='Deadline to Apply'
                className='Employer-dashboard-input pr-10'
              />
              <span className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 transform text-gray-400'>
                <SlCalender />
              </span>
            </div>

            <input
              name='detail'
              placeholder='Other Detail'
              value={formData.detail}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />
          </div>
        )}

        {step === 4 && (
          <div className='space-y-3'>
            <input
              name='q1'
              placeholder='Question 1'
              required
              value={formData.q1}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />
            <input
              name='q2'
              placeholder='Question 2'
              value={formData.q2}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />
            <input
              name='q3'
              placeholder='Question 3'
              value={formData.q3}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />
            <input
              name='q4'
              placeholder='Question 4'
              value={formData.q4}
              onChange={handleChange}
              className='Employer-dashboard-input'
            />

            <div className='mt-2 text-center text-sm text-gray-500'>
              <label
                htmlFor='cv-upload'
                className='block cursor-pointer rounded-xl border border-dashed border-gray-400 py-4'
              >
                <p className='flex flex-col items-center justify-center text-gray-600'>
                  <FaCloudUploadAlt size={20} />
                  <span className='font-medium'>Upload CV</span>
                </p>
                <input
                  type='file'
                  id='cv-upload'
                  name='cv'
                  className='hidden'
                  onChange={e => {
                    if (e.target.files && e.target.files[0]) {
                      setFormData(prev => ({
                        ...prev,
                        cv: e.target.files![0]
                      }));
                    }
                  }}
                />
              </label>

              {formData.cv && (
                <p className='mt-1 truncate text-center text-xs text-gray-500'>
                  {formData.cv.name}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className='mt-6 flex justify-between'>
          <button
            onClick={step === 1 ? onClose : prevStep}
            className='rounded-full border px-6 py-2 text-sm'
          >
            {step === 1 ? "Cancel" : "Back"}
          </button>
          <button
            onClick={nextStep}
            className='rounded-full bg-[#559092] px-6 py-2 text-sm text-white'
          >
            {step === 4 ? "Create" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobFormModal;
