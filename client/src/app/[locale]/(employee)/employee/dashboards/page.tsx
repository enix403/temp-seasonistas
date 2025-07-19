"use client";

import ChartSection from "../../../../../components/Employee/Dashboard/ChartSection";
import bannerBg2 from "~/app/assets/employer/home/bannerBg2.png";
import CreateNewPostModal from "~/components/Employee/Home/CreateNewPostModal";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import MetricCard from "~/components/Employee/Dashboard/MetricCard";
import AppliedJobsTable from "~/components/Employee/Dashboard/AppliedJobsTable";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCreateNewPost = () => {
    setModalOpen(true);
  };

  return (
    <div className='mb-[90px] space-y-6 py-4 sm:mb-0 sm:px-6'>
      {/* Chart + Events */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
        <div className='md:col-span-2'>
          <ChartSection />
        </div>

        <div
          className='relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-[24px] px-6 py-6 text-white sm:py-8'
          style={{
            backgroundImage: `url(${bannerBg2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Dark gradient overlay */}
          <div className='absolute inset-0 z-0 bg-gradient-to-r from-black/80 to-black/100' />

          {/* Arrow icon */}
          <div
            className='absolute top-4 right-4 z-10 cursor-pointer rounded-full border p-3'
            onClick={handleCreateNewPost}
          >
            <GoArrowUpRight className='text-xl text-white' />
          </div>

          {/* Text content */}
          <div className='relative z-10 mt-10 sm:mt-14 lg:mt-60'>
            <h3 className='text-lg font-semibold sm:text-xl xl:text-[22px]'>
              Create a new Post
            </h3>
            <p className='mt-1 text-sm font-light text-white/80'>
              Customize your perfect job with preferred criteria and
              expectations
            </p>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        <MetricCard
          title='Profile Appear'
          value='4500'
          change={+2.6}
          subtitle='last 7 days'
          bars={[5, 6, 3, 20, 25, 3, 17, 16]}
        />
        <MetricCard
          title='Ad Applied'
          value='4 876'
          change={+0.2}
          subtitle='last 7 days'
          bars={[5, 9, 17, 7, 5, 7, 10, 15]}
        />
        <MetricCard
          title='Matched ads'
          value='08'
          change={-0.1}
          subtitle='last 7 days'
          bars={[5, 9, 17, 7, 5, 7, 10, 15]}
        />
      </div>
      {/* Applied job table */}
      <AppliedJobsTable />
      {/* Modal */}
      <CreateNewPostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Page;
