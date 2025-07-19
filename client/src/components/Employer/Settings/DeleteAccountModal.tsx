"use client";

type Props = {
  onClose: () => void;
  onConfirm: () => void;
};

const DeleteAccountModal = ({ onClose, onConfirm }: Props) => {
  return (
    <div className='fixed inset-0 z-50 !m-0 flex items-center justify-center bg-black/30 px-4'>
      <div className='relative w-full max-w-lg rounded-2xl bg-white p-8 text-left shadow-xl'>
        <h2 className='mb-3 text-lg font-semibold'>Delete Account</h2>

        <p className='mb-6 max-w-md text-sm text-[#6B7280]'>
          If you proceed with this action, you will no longer have access to
          this account or your conversation history.
        </p>

        <div className='flex justify-end gap-4'>
          <button
            onClick={onClose}
            className='rounded-full border border-gray-300 px-6 py-2 text-sm'
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='rounded-full bg-[#FF5630] px-6 py-2 text-sm font-medium text-white'
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
