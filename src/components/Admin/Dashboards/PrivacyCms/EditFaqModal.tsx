"use client";

import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";

type Props = {
  initialQuestion: string;
  initialAnswer: string;
  onCancel: () => void;
  onSave: (question: string, answer: string) => void;
};

const EditFaqModal = ({
  initialQuestion,
  initialAnswer,
  onCancel,
  onSave
}: Props) => {
  const [question, setQuestion] = useState(initialQuestion);
  const [answer, setAnswer] = useState(initialAnswer);

  useEffect(() => {
    setQuestion(initialQuestion);
    setAnswer(initialAnswer);
  }, [initialQuestion, initialAnswer]);

  const handleSubmit = () => {
    if (question.trim() && answer.trim()) {
      onSave(question, answer);
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
        <h3 className='mb-4 text-lg font-semibold text-[#1C252E]'>
          Edit FAQ’S
        </h3>

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
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditFaqModal;
