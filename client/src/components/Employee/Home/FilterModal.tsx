"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type FilterModalProps = {
  open: boolean;
  onClose: () => void;
  selectedFilters: Record<string, string>;
  onFilterChange: (section: string, value: string) => void;
};

const sections: Record<string, string[]> = {
  "Job Type": ["Full Time", "Part Time", "Hybrid", "Specific Dates"],
  "Experience Level": [
    "Entry Level (0–2 years)",
    "Mid Level (2–5 years)",
    "Senior Level (5+ years)"
  ],
  Remove: ["Temporary", "Permanent", "Hybrid", "Other"],
  Salary: ["Monthly", "Daily", "Hourly"],
  Categories: [
    "Recreation",
    "Driver Workers",
    "Boats and Ships",
    "Entertainment"
  ]
};

const FilterModal = ({
  open,
  onClose,
  selectedFilters,
  onFilterChange
}: FilterModalProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={onClose}>
        {/* Overlay */}
        <div className='fixed inset-0 bg-black/30' aria-hidden='true' />

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <Dialog.Panel className='w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all'>
              {/* Header */}
              <div className='flex items-center justify-between border-b pb-4'>
                <Dialog.Title className='text-xl font-bold text-[#101828]'>
                  Filter
                </Dialog.Title>
                <button
                  onClick={onClose}
                  className='rounded-full border border-[#3b6b6e] bg-[#4B8378] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#417471]'
                >
                  Save
                </button>
              </div>

              {/* Filters Grid */}
              <div className='mt-6 flex items-start justify-between'>
                {Object.entries(sections).map(([title, options]) => (
                  <div
                    key={title}
                    className='flex h-full flex-col justify-start p-4'
                  >
                    <p className='mb-3 font-semibold text-[#101828]'>{title}</p>
                    <div className='space-y-3'>
                      {options.map(opt => (
                        <label
                          key={opt}
                          className='flex cursor-pointer items-center gap-2'
                        >
                          <input
                            type='radio'
                            name={title}
                            value={opt}
                            checked={selectedFilters[title] === opt}
                            onChange={e =>
                              onFilterChange(title, e.target.value)
                            }
                            className='h-4 w-4 accent-[#4B8378]'
                          />
                          <span
                            className={`${selectedFilters[title] === opt ? "text-[#4B8378]" : "text-gray-700"} text-sm`}
                          >
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FilterModal;
