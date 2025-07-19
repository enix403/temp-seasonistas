import Image from "next/image";

import bannerBg1 from "~/app/assets/employer/home/bannerBg1.png";
import bannerHero from "~/app/assets/employer/home/bannerHero.png";

const Banners = () => {
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
        {/* Gradient Overlay */}
        <div className='absolute inset-0 z-0 bg-gradient-to-r from-[#141A21E0]/80 to-black/100' />

        {/* Text */}
        <div className='relative top-10 z-10'>
          <p className='text-[22px] leading-[32px] font-[450]'>Hi Tam Tran,</p>
          <h2 className='items-center gap-1 text-[28px] font-[600] md:flex lg:leading-[72px] xl:text-[40px]'>
            Welcome back👋
          </h2>
        </div>

        {/* Hero Image */}
        <Image
          src={bannerHero}
          alt='Hero'
          className='absolute top-5 right-0 z-10 hidden h-[300px] w-[200px] scale-x-[-1] sm:block lg:right-10 xl:right-16'
        />
      </div>
    </div>
  );
};

export default Banners;
