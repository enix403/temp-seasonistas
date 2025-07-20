"use client";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import CreateNewPostModal from "./CreateNewPostModal";
import { useState } from "react";

import bannerBg1 from "@/assets/employer/home/bannerBg1.png";
import bannerBg2 from "@/assets/employer/home/bannerBg2.png";
import bannerHero from "@/assets/employer/home/bannerHero.png";

const Banners = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCreateNewPost = () => {
    setModalOpen(true);
  };

  return (
    <div className='mb-6 flex w-full flex-col gap-4 lg:flex-row'>
      {/* Left Welcome Banner */}
      <div
        className='relative z-10 flex min-h-[220px] flex-1 items-center justify-between overflow-hidden rounded-[24px] px-8 py-6 text-white lg:h-[220px]'
        style={{
          backgroundImage: `url(${bannerBg1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className='absolute inset-0 z-0 bg-gradient-to-r from-[#141A21E0]/80 to-black/100' />

        <div className='relative top-10 z-10'>
          <p className='text-[22px] leading-[32px] font-[450]'>Hi Tam Tran,</p>
          <h2 className='items-center gap-1 text-[28px] font-[600] md:flex lg:leading-[72px] xl:text-[40px]'>
            Welcome back👋
          </h2>
        </div>

        <Image
          src={bannerHero}
          alt='Hero'
          className='absolute top-5 right-0 z-10 hidden h-[300px] w-[200px] scale-x-[-1] sm:block lg:right-10 xl:right-16'
        />
      </div>

      {/* Right CTA Banner */}
      <div
        className='relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[24px] px-6 py-4 text-white lg:h-[220px] lg:w-1/4'
        style={{
          backgroundImage: `url(${bannerBg2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className='absolute inset-0 z-0 bg-gradient-to-r from-black/80 to-black/100' />

        <div
          className='absolute top-4 right-4 z-10 cursor-pointer rounded-full border p-3'
          onClick={handleCreateNewPost}
        >
          <GoArrowUpRight className='text-xl text-white' />
        </div>

        <div className='relative top-28 z-10 lg:top-16 xl:top-28'>
          <h3 className='text-[18px] font-[600] xl:text-[22px]'>
            Create a new Post
          </h3>
          <p className='mt-[2px] text-sm font-[300] text-white/80'>
            Customize your perfect job with preferred criteria and expectations
          </p>
        </div>
      </div>

      {/* Modal */}
      <CreateNewPostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Banners;
