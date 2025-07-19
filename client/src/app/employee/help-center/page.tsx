"use client";

import { useState } from "react";
import { FaSearch, FaQuestionCircle } from "react-icons/fa";
import HelpMessageModal from "@/components/HelpCenter/HelpMessageModal";

const helpTopics = [
  {
    title: "Inappropriate Behavior",
    description:
      "Harassment and aggressive behavior refer to actions or language intended to intimidate, belittle, or harm others, often involving offensive or discriminatory language."
  },
  {
    title: "False or Misleading Profile",
    description:
      "Fake experience or skills involve presenting false qualifications or abilities, while misleading or unrelated photos deceive by not representing the true context."
  },
  {
    title: "Fraud or Scam Attempt",
    description:
      "Requests for money outside the platform and unfulfilled payment promises both violate trust by bypassing secure systems and failing agreed commitments."
  },
  {
    title: "Violation of Terms of Service",
    description:
      "Attempts to make off-platform deals and using multiple or fake accounts undermine safety, fairness, and trust within the platform community."
  },
  {
    title: "Inappropriate Content",
    description:
      "Uploads containing sexual, violent, or offensive material violate community guidelines and create an unsafe or inappropriate environment for others."
  },
  {
    title: "Unprofessional Conduct",
    description:
      "Unprofessional behavior during a job or task, including not showing up for scheduled appointments, reflects a lack of reliability and commitment."
  }
];

const HelpCenter = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTopics = helpTopics.filter(
    topic =>
      topic.title.toLowerCase().includes(search.toLowerCase()) ||
      topic.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='space-y-8 py-6 sm:px-6'>
      <span className='text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Help Center
      </span>
      <>
        {/* Header */}
        <div className='space-y-4 rounded-xl bg-[#5590931F] px-10 py-16 text-center'>
          <p className='text-xs font-semibold text-[#53686A]'>Help</p>
          <h1 className='text-[35px] leading-[44px] font-semibold tracking-wide text-[#559093]'>
            Ask us anything
          </h1>
          <p className='text-sm leading-[22px] tracking-wide text-[#53686A]'>
            Have any questions? We’re here to assist you.
          </p>

          <div className='mx-auto mt-4 w-[235px] max-w-sm'>
            <div className='relative'>
              <FaSearch className='absolute top-3 left-3 text-[#53686A]' />
              <input
                type='text'
                placeholder='Search here'
                value={search}
                onChange={e => setSearch(e.target.value)}
                className='w-full rounded-[6px] border border-gray-300 py-2 pr-4 pl-10 text-[12px] font-normal text-[#53686A] outline-none'
              />
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:px-16 lg:grid-cols-3'>
          {filteredTopics.length > 0 ? (
            filteredTopics.map((item, i) => (
              <div
                key={i}
                className='space-y-2 rounded-xl border border-gray-200 bg-white p-5 shadow-sm'
              >
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#EBF2F2]'>
                  <FaQuestionCircle className='text-[#4A9696]' />
                </div>
                <h3 className='text-[16px] leading-[22px] font-semibold text-black'>
                  {item.title}
                </h3>
                <p className='text-[12px] leading-5 font-[400] text-[#767676]'>
                  {item.description}
                </p>
              </div>
            ))
          ) : (
            <p className='col-span-full mt-4 text-center text-sm text-gray-500'>
              No topics match your search.
            </p>
          )}
        </div>

        {/* Footer */}
        <div className='md:px-16'>
          <div className='flex flex-col items-center justify-between rounded-xl bg-[#ECF4F4] p-6 md:flex-row'>
            <div className='text-sm text-[#1A1A1A]'>
              <p className='font-semibold text-[#4A9696]'>
                Still have questions?
              </p>
              <p className='text-gray-600'>
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className='mt-3 rounded-full bg-[#4A9696] px-6 py-2 text-sm text-white md:mt-0'
            >
              Send Message
            </button>
          </div>
        </div>
      </>
      <HelpMessageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default HelpCenter;
