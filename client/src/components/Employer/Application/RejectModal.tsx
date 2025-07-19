"use client";

const RejectModal = ({
  onClose,
  onConfirm
}: {
  onClose: () => void;
  onConfirm: () => void;
}) => {
  return (
    <div className='fixed inset-0 z-50 !m-0 flex items-center justify-center bg-black/30'>
      <div className='w-[400px] space-y-6 rounded-2xl bg-white px-6 py-5 text-left'>
        {/* Title */}
        <h2 className='text-[16px] font-semibold text-[#1C1C1E]'>
          Reject Applicant
        </h2>

        {/* Message */}
        <p className='text-sm text-[#637381]'>
          Are you sure you want to reject this applicant?
        </p>

        {/* Actions */}
        <div className='flex justify-end gap-3'>
          <button
            onClick={onClose}
            className='rounded-full border border-[#E0E0E0] px-6 py-[10px] text-sm text-[#1C1C1E]'
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='rounded-full bg-[#EF4444] px-6 py-[10px] text-sm font-medium text-white'
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectModal;
