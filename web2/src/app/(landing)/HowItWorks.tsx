"use client";

import clsx from "clsx";
import { Wifi } from "lucide-react";
import { UserPlus, User, Briefcase } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

import { RoundPill } from "./RoundPill";
import { GlowingEffect } from "@/components/ui/glowing-effect";

function StepCard({ title, desc, num, icon }: any) {
  return (
    <div className='relative rounded-[24px] border-[0.5px] border-[#80D6E2]/30 bg-white/10 p-8'>
      <div className='mb-4 flex items-start'>
        {/* <Icon className='mr-3 h-8 w-8 text-teal-400' /> */}
        {/* <img src='/how-it-works-1.png' className='h-9 w-9' /> */}
        {icon}
        <span className='outlined-text absolute top-8 right-8 text-4xl font-bold'>
          {num}
        </span>
      </div>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='mt-4 font-normal text-[#85A3AB]'>{desc}</p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <div
      id='how-it-works'
      className={clsx(
        "py-20",
        "px-8 md:px-14 lg:px-24",
        "text-[#DBDBDB]",
        "bg-[#022127]",
        "relative"
      )}
    >
      <div
        className={clsx(
          "absolute top-1/2 left-1/2 h-[20%] w-[15%] bg-[#dedddd] bg-[size:10%_10%] opacity-10 blur-[1000px]",
          "-translate-x-1/2 -translate-y-1/2"
        )}
      ></div>

      {/* <RoundPill label='Our Work' className='mx-auto border-[#3D5C64]' /> */}

      <h1 className='mt-6 text-center text-white max-md:text-4xl'>
        How It Works
      </h1>

      <div className='mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2'>
        {/* Step 1 */}
        {/* <BlurFade delay={0.15 * 1} duration={0.25} inView> */}
        <StepCard
          num='01'
          icon={<img src='/how-it-works-1.png' className='h-9 w-9' />}
          title='Sign Up or Login'
          desc='Create an account or login with an existing profile to begin your
            professional journey'
        />
        {/* </BlurFade> */}
        {/* <BlurFade delay={0.2 * 2} duration={0.25} inView> */}
        <StepCard
          num='02'
          icon={
            <div className='flex flex-col items-center'>
              <svg
                width={17.5}
                height={17.5}
                viewBox='0 0 19 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.42859 0.212402C4.5137 0.212402 0.518005 4.2081 0.518005 9.12299C0.518005 13.9441 4.28859 17.846 9.20348 18.0148C9.35356 17.9961 9.50363 17.9961 9.61619 18.0148C9.6537 18.0148 9.67246 18.0148 9.70998 18.0148C9.72874 18.0148 9.72874 18.0148 9.7475 18.0148C14.5498 17.846 18.3204 13.9441 18.3392 9.12299C18.3392 4.2081 14.3435 0.212402 9.42859 0.212402Z'
                  fill='#559093'
                />
              </svg>
              <svg
                width={26.4}
                height={17.3}
                viewBox='0 0 27 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M22.9598 3.00435C17.726 -0.484849 9.19068 -0.484849 3.91937 3.00435C1.53696 4.59888 0.223816 6.75618 0.223816 9.06355C0.223816 11.3709 1.53696 13.5095 3.90061 15.0852C6.52688 16.8486 9.97849 17.7303 13.4302 17.7303C16.8819 17.7303 20.3335 16.8486 22.9598 15.0852C25.3235 13.4907 26.6366 11.3522 26.6366 9.02603C26.6178 6.71866 25.3235 4.58012 22.9598 3.00435Z'
                  fill='#559093'
                />
              </svg>
            </div>
          }
          title='Create your work profile'
          desc='Build your professional identity with skills, experience, and
            portfolio details'
        />
        {/* </BlurFade> */}
        {/* <BlurFade delay={0.15 * 3} duration={0.25} inView> */}
        <StepCard
          num='03'
          icon={<img src='/how-it-works-3.png' className='h-8 w-8' />}
          title='Apply for a job or post an opening'
          desc='Search for opportunities as a job seeker or list vacancies as an
            employer'
        />
        {/* </BlurFade> */}
        {/* <BlurFade delay={0.15 * 4} duration={0.25} inView> */}
        <StepCard
          num='04'
          icon={<img src='/how-it-works-4.png' className='h-8 w-8' />}
          title='Connect and start working'
          desc='Initiate collaborations and embark on new professional adventures
            with trusted partners'
        />
        {/* </BlurFade> */}
      </div>
    </div>
  );
}

/*

icon={<img src='/how-it-works-1.png' className='h-9 w-9' />}
icon={<img src='/how-it-works-1.png' className='h-9 w-9' />}
icon={<img src='/how-it-works-1.png' className='h-9 w-9' />}
icon={<img src='/how-it-works-1.png' className='h-9 w-9' />}

*/
