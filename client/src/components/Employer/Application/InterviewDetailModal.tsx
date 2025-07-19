import { IoIosClose } from "react-icons/io";
import { FaRegCalendarAlt, FaRegCopy } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const InterviewDetailModal = ({ onClose, onSend }) => {
  return (
    <div className='fixed inset-0 z-50 !m-0 flex w-full items-center justify-center bg-black/30'>
      <div className='relative mx-4 w-full max-w-md space-y-5 rounded-[20px] bg-white p-5 sm:mx-0 sm:max-w-lg sm:p-6'>
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-xl text-gray-500'
        >
          <IoIosClose size={26} />
        </button>

        <h2 className='text-[18px] font-semibold text-[#1E1E1E]'>
          Add Interview Detail
        </h2>

        {/* Date Picker */}
        <div className='relative'>
          <input
            type='text'
            placeholder='Start Date'
            onFocus={e => (e.target.type = "date")}
            // onBlur={(e) => !e.target.value && (e.target.type = 'text')}
            className='w-full rounded-full border border-[#E0E0E0] px-4 py-[14px] text-sm text-[#1C1C1E] outline-none placeholder:text-[#9E9E9E]'
          />
          <FaRegCalendarAlt className='absolute top-1/2 right-4 -translate-y-1/2 text-[#9E9E9E]' />
        </div>

        {/* Time Select */}

        <div className='relative'>
          <select
            className='w-full appearance-none rounded-full border border-[#E0E0E0] px-4 py-[14px] pr-10 text-sm text-[#1C1C1E] outline-none placeholder:text-[#9E9E9E]'
            defaultValue=''
          >
            <option value='' disabled>
              Select Time
            </option>
            <option>10:00 AM</option>
            <option>2:30 PM</option>
            <option>5:00 PM</option>
          </select>
          <IoIosArrowDown className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#9E9E9E]' />
        </div>

        <div className='relative'>
          <select
            className='w-full appearance-none rounded-full border border-[#E0E0E0] px-4 py-[14px] pr-10 text-sm text-[#1C1C1E] outline-none placeholder:text-[#9E9E9E]'
            defaultValue=''
          >
            <option value='' disabled>
              Location
            </option>
            <option>Google Meet</option>
            <option>Zoom</option>
            <option>Office</option>
          </select>
          <IoIosArrowDown className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#9E9E9E]' />
        </div>

        {/* Message */}
        <textarea
          className='min-h-[120px] w-full rounded-xl border border-[#E0E0E0] px-4 py-3 text-sm outline-none placeholder:text-[#9E9E9E]'
          placeholder='Enter Message (Optional)'
        ></textarea>

        {/* Link Row */}
        <div className='flex w-full items-center justify-between rounded-md bg-[#EEF4F4] px-4 py-3 text-sm text-[#4A4A4A]'>
          <span className='truncate'>http:googlemeetkcucuCBuuqwu2772</span>
          <button>
            <FaRegCopy size={16} />
          </button>
        </div>

        {/* Footer */}
        <div className='flex justify-end gap-2 pt-2'>
          <button
            onClick={onClose}
            className='min-w-[100px] rounded-full border border-[#E0E0E0] px-6 py-2 text-center text-sm font-medium text-[#1C1C1E]'
          >
            Cancel
          </button>
          <button
            onClick={onSend}
            className='min-w-[100px] rounded-full bg-[#4F9A98] px-6 py-2 text-center text-sm font-medium text-white'
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewDetailModal;
