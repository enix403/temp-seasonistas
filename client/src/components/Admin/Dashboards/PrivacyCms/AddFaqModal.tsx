"use client";

import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

type Props = {
  onCancel: () => void;
  onSubmit: (question: string, answer: string) => void;
};

const AddFaqModal = ({ onCancel, onSubmit }: Props) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if (question.trim() && answer.trim()) {
      onSubmit(question, answer);
      setQuestion("");
      setAnswer("");
    }
  };

  return (
    <div className='bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black'>
      <div className='relative w-[90%] max-w-md rounded-2xl bg-white p-6 text-left'>
        <button
          className='absolute top-4 right-4 text-gray-500 hover:text-black'
          onClick={onCancel}
        >
          <RxCross2 />
        </button>
        <h3 className='mb-4 text-lg font-semibold text-[#1C252E]'>Add FAQ’S</h3>

        <input
          type='text'
          placeholder='Question'
          className='mb-4 w-full rounded-full border border-gray-300 px-4 py-3 text-sm'
          value={question}
          onChange={e => setQuestion(e.target.value)}
        />

        <textarea
          placeholder='Answer'
          rows={5}
          className='mb-6 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm'
          value={answer}
          onChange={e => setAnswer(e.target.value)}
        />

        <div className='flex justify-end gap-4'>
          <button
            onClick={onCancel}
            className='rounded-full border px-6 py-2 font-medium text-black'
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className='rounded-full bg-[#559093] px-6 py-2 font-medium text-white'
          >
            Add FAQ’S
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFaqModal;
