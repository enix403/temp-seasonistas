"use client";

import { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import AddFaqModal from "@/components/Admin/Dashboards/PrivacyCms/AddFaqModal";
import DeleteModal from "@/components/Admin/Dashboards/PrivacyCms/DeleteModal";
import EditFaqModal from "@/components/Admin/Dashboards/PrivacyCms/EditFaqModal";

const faqs = [
  {
    question: "How can I reset my password?",
    answer:
      "Go to settings, click “Reset Password,” follow instructions carefully."
  },
  {
    question: "How do I apply for a job listing?",
    answer: "Open the job post, click “Apply,” and submit details."
  },
  {
    question: "How can I update my profile information?",
    answer: "Visit profile section, click “Edit,” and save updated info."
  },
  {
    question: "Where can I see my application history?",
    answer: "Check “My Applications” tab in your user dashboard panel"
  },
  {
    question: "How do I contact support for help?",
    answer: "Use the contact form or email us directly for support."
  },
  {
    question: "What should I do if I see fake jobs?",
    answer: "Click “Report” on job, admin will review and take action."
  },
  {
    question: "Can I deactivate or delete my account?",
    answer: "Yes, go to account settings and click “Deactivate Account” button."
  },
  {
    question: "How can I reset my password?",
    answer:
      "Go to settings, click “Reset Password,” follow instructions carefully."
  },
  {
    question: "How do I apply for a job listing?",
    answer: "Open the job post, click “Apply,” and submit details."
  },
  {
    question: "How can I update my profile information?",
    answer: "Visit profile section, click “Edit,” and save updated info."
  },
  {
    question: "Where can I see my application history?",
    answer: "Check “My Applications” tab in your user dashboard panel"
  },
  {
    question: "How do I contact support for help?",
    answer: "Use the contact form or email us directly for support."
  },
  {
    question: "What should I do if I see fake jobs?",
    answer: "Click “Report” on job, admin will review and take action."
  },
  {
    question: "Can I deactivate or delete my account?",
    answer: "Yes, go to account settings and click “Deactivate Account” button."
  }
];

export default function FaqList() {
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedFaqIndex, setSelectedFaqIndex] = useState<number | null>(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [faqData, setFaqData] = useState(faqs);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const totalPages = Math.ceil(faqData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFaqs = faqData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const openDeleteModal = (index: number) => {
    setSelectedFaqIndex(index);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedFaqIndex !== null) {
      const updated = [...faqData];
      updated.splice(startIndex + selectedFaqIndex, 1);
      setFaqData(updated);
    }
    setShowDeleteModal(false);
    setSelectedFaqIndex(null);
  };

  const handleAddFaq = (question: string, answer: string) => {
    setFaqData([{ question, answer }, ...faqData]);
    setShowAddModal(false);
  };

  const openEditModal = (index: number) => {
    setEditIndex(index);
    setShowEditModal(true);
  };

  const handleSaveFaq = (question: string, answer: string) => {
    if (editIndex !== null) {
      const updated = [...faqData];
      updated[startIndex + editIndex] = { question, answer };
      setFaqData(updated);
      setShowEditModal(false);
      setEditIndex(null);
    }
  };

  return (
    <>
      <h1 className='mb-6 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        FAQ / Help Center
      </h1>

      <div className='w-full overflow-x-auto rounded-2xl bg-white py-6 shadow-sm'>
        <div className='mb-6 flex items-center justify-between px-6'>
          <h2 className='text-[22px] font-semibold text-[#1C252E]'>FAQ List</h2>
          <button
            onClick={() => setShowAddModal(true)}
            className='rounded-full bg-[#559093] px-6 py-[10px] text-sm font-medium text-white hover:bg-[#40767A]'
          >
            Add FAQS
          </button>
        </div>

        <table className='w-full text-left text-[12px] text-[#1C252E]'>
          <thead className='bg-[#F5F5F5] font-semibold text-[#637381]'>
            <tr>
              <th className='px-6 py-5'>FAQ Name</th>
              <th className='px-6 py-5'>Answer</th>
              <th className='px-6 py-5'></th>
            </tr>
          </thead>
          <tbody>
            {currentFaqs.map((faq, idx) => (
              <tr key={idx} className='border-t hover:bg-[#F5F5F5]'>
                <td className='px-6 py-4'>{faq.question}</td>
                <td className='px-6 py-4'>{faq.answer}</td>
                <td className='flex gap-2 px-6 py-4'>
                  <button
                    onClick={() => openEditModal(idx)}
                    className='flex h-10 w-10 items-center justify-center rounded-full bg-[#EDF5F6] text-[#4B8378] hover:bg-[#D6EEEE]'
                  >
                    <LuPencil size={18} />
                  </button>

                  <button
                    onClick={() => openDeleteModal(idx)}
                    className='flex h-10 w-10 items-center justify-center rounded-full bg-[#FDEEEE] text-[#D95057] hover:bg-[#FCD5D5]'
                  >
                    <FiTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='mt-4 flex items-center justify-end gap-3 px-6 text-sm text-gray-500'>
          <span>
            {startIndex + 1}–
            {Math.min(startIndex + itemsPerPage, faqData.length)} of{" "}
            {faqData.length}
          </span>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className='rounded px-2 py-1 hover:bg-gray-100 disabled:text-gray-300'
          >
            &#x276E;
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className='rounded px-2 py-1 hover:bg-gray-100 disabled:text-gray-300'
          >
            &#x276F;
          </button>
        </div>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <DeleteModal
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
        />
      )}

      {/* Add faq Modal */}
      {showAddModal && (
        <AddFaqModal
          onCancel={() => setShowAddModal(false)}
          onSubmit={handleAddFaq}
        />
      )}
      {showEditModal && editIndex !== null && (
        <EditFaqModal
          initialQuestion={faqData[startIndex + editIndex].question}
          initialAnswer={faqData[startIndex + editIndex].answer}
          onCancel={() => setShowEditModal(false)}
          onSave={handleSaveFaq}
        />
      )}
    </>
  );
}
