"use client";

import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import SuccessModal from "./SuccessModal";

const HelpMessageModal = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [agree, setAgree] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!topic || !description || !agree) return;

    onClose();
    setTimeout(() => {
      setShowSuccess(true);
      setTopic("");
      setDescription("");
      setAgree(false);
    }, 200);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        className='fixed inset-0 z-50 flex items-center justify-center px-4'
      >
        <div className='fixed inset-0 bg-black/40' />
        <Dialog.Panel className='relative z-50 w-full max-w-xl space-y-4 rounded-2xl bg-white px-6 pt-2 pb-10 shadow-lg'>
          <button
            onClick={onClose}
            className='absolute top-4 right-4 text-xl text-gray-500'
          >
            <IoClose />
          </button>
          <Dialog.Title className='text-lg font-semibold'>
            Help Center
          </Dialog.Title>

          <form className='space-y-4' onSubmit={handleSubmit}>
            <select
              value={topic}
              onChange={e => setTopic(e.target.value)}
              className='w-full rounded-full border px-4 py-2 text-sm text-gray-700'
              required
            >
              <option disabled value=''>
                Select Topic
              </option>
              <option>Inappropriate Behavior</option>
              <option>False or Misleading Profile</option>
              <option>Fraud or Scam Attempt</option>
              <option>Violation of Terms of Service</option>
              <option>Inappropriate Content</option>
              <option>Unprofessional Conduct</option>
            </select>

            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder='Enter Description'
              rows={4}
              required
              className='w-full resize-none rounded-xl border p-3 text-sm'
            />

            <div className='flex gap-2 text-sm'>
              <input
                type='checkbox'
                checked={agree}
                onChange={() => setAgree(!agree)}
                className='accent-green-500'
              />
              <span>I agree with privacy policy and terms.</span>
            </div>

            <div className='flex justify-between gap-3 pt-2'>
              <button
                type='button'
                onClick={onClose}
                className='flex-1 rounded-full border py-2 text-sm text-gray-700'
              >
                Cancel
              </button>
              <button
                type='submit'
                disabled={!topic || !description || !agree}
                className={`flex-1 rounded-full py-2 text-sm text-white ${topic && description && agree ? "bg-[#4A9696]" : "cursor-not-allowed bg-gray-400"}`}
              >
                Send
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </Dialog>
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
};

export default HelpMessageModal;
