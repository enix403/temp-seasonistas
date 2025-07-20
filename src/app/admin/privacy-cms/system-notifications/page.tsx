"use client";

import Image from "next/image";
import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import logo from "@/assets/employer/logo.png";

const templates = [
  {
    name: "Welcome Email",
    type: "Email",
    subject: "Welcome Email",
    img: logo,
    body: `Hi Jane,
<br />
I'm Mike from the product team here at MoveApp. It looks like you're off to a great start getting setup!
<br />
If you need support or have any feedback for us, just reply to this email and we will be in touch.
<br />
Take care,<br />
Sarah`
  },
  {
    name: "Password Reset",
    type: "Email",
    subject: "Reset Your Password",
    body: "Click the link below to reset your password."
  },
  {
    name: "Account Verification",
    type: "Email",
    subject: "Verify Your Account",
    body: "Thanks for signing up! Please verify your email using the link below."
  },
  {
    name: "Job Match Notification",
    type: "Email",
    subject: "New Job Match!",
    body: "We found a new job that matches your preferences."
  }
];

export default function Page() {
  const [showPreview, setShowPreview] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState<any>(null);

  const handlePreview = (template: any) => {
    setActiveTemplate(template);
    setShowPreview(true);
  };

  const handleEdit = (template: any) => {
    setActiveTemplate(template);
    setShowEdit(true);
  };

  return (
    <div className='w-full'>
      <h1 className='mb-6 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        System Notifications
      </h1>

      <div className='w-full overflow-x-auto rounded-2xl bg-white shadow-sm'>
        <h2 className='px-6 py-5 text-[18px] font-semibold'>Email Template</h2>

        <table className='w-full text-left text-xs text-[#1C252E]'>
          <thead className='bg-[#F5F5F5] font-medium text-[#637381]'>
            <tr>
              <th className='px-6 py-4'>Template Name</th>
              <th className='px-6 py-4'>Type</th>
              <th className='px-6 py-4'>Action</th>
              <th className='px-6 py-4'></th>
            </tr>
          </thead>
          <tbody>
            {templates.map((item, idx) => (
              <tr key={idx} className='border-t hover:bg-[#F5F5F5]'>
                <td className='px-6 py-5'>{item.name}</td>
                <td className='px-6 py-5'>{item.type}</td>
                <td
                  className='cursor-pointer px-6 py-5 text-[#1C252E] underline'
                  onClick={() => handlePreview(item)}
                >
                  Preview
                </td>
                <td className='px-6 py-5'>
                  <button
                    className='flex h-10 w-10 items-center justify-center rounded-full bg-[#EDF5F6] text-[#4B8378] hover:bg-[#D6EEEE]'
                    onClick={() => handleEdit(item)}
                  >
                    <LuPencil size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Preview Modal */}
      {showPreview && activeTemplate && (
        <div className='bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black'>
          <div className='relative w-[90%] max-w-2xl rounded-2xl bg-white p-6'>
            <div className='mb-4 flex items-center justify-between'>
              <h3 className='text-lg font-semibold'>
                {activeTemplate.subject}
              </h3>
              <button onClick={() => setShowPreview(false)}>
                <RxCross2 />
              </button>
            </div>
            <div className='rounded-xl border p-6 text-sm leading-6'>
              {activeTemplate?.img && (
                <Image
                  className='mb-3'
                  src={logo}
                  alt='logo'
                  width={200}
                  height={50}
                />
              )}
              <div dangerouslySetInnerHTML={{ __html: activeTemplate.body }} />
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEdit && activeTemplate && (
        <div className='bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black'>
          <div className='relative w-[90%] max-w-lg rounded-2xl bg-white p-6'>
            <div className='mb-4 flex items-center justify-between'>
              <h3 className='text-lg font-semibold'>Edit Template</h3>
              <button onClick={() => setShowEdit(false)}>
                <RxCross2 />
              </button>
            </div>
            <input
              type='text'
              defaultValue={activeTemplate.subject}
              className='mb-4 w-full rounded-full border px-4 py-2 text-sm'
            />
            <textarea
              defaultValue={activeTemplate.body}
              rows={6}
              className='w-full rounded-xl border px-4 py-2 text-sm'
            />
            <div className='mt-6 flex justify-end gap-4'>
              <button
                onClick={() => setShowEdit(false)}
                className='rounded-full border px-6 py-2 font-medium text-black'
              >
                Cancel
              </button>
              <button className='rounded-full bg-[#559093] px-6 py-2 font-medium text-white'>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
