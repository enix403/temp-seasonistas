"use client";

import clsx from "clsx";
import { Wifi } from "lucide-react";
import { UserPlus, User, Briefcase } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

import { RoundPill } from "./RoundPill";
import { GlowingEffect } from "@/components/ui/glowing-effect";

function StepCard({ title, desc, num, Icon }: any) {
  return (
    <div className='relative rounded-[24px] border-[0.5px] border-[#80D6E2]/30 bg-white/10 p-8'>
      <div className='mb-4 flex items-start'>
        {/* <UserPlus className='mr-3 h-8 w-8 text-teal-400' /> */}
        <Icon className='mr-3 h-8 w-8 text-teal-400' />
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
    id="how-it-works"
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
          "absolute top-1/2 left-1/2 h-[95%] w-[60%] bg-[#dedddd] bg-[size:10%_10%] opacity-10 blur-[1000px]",
          "-translate-x-1/2 -translate-y-1/2"
        )}
      ></div>

      <RoundPill label='Our Work' className='mx-auto border-[#3D5C64]' />

      <h1 className='mt-6 text-center text-white max-md:text-4xl'>
        How It Works
      </h1>

      <div className='mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2'>
        {/* Step 1 */}
        {/* <BlurFade delay={0.15 * 1} duration={0.25} inView> */}
        <StepCard
          num='01'
          Icon={UserPlus}
          title='Sign Up or Login'
          desc='Create an account or login with an existing profile to begin your
            professional journey'
        />
        {/* </BlurFade> */}
        {/* <BlurFade delay={0.2 * 2} duration={0.25} inView> */}
        <StepCard
          num='02'
          Icon={User}
          title='Create your work profile'
          desc='Build your professional identity with skills, experience, and
            portfolio details'
        />
        {/* </BlurFade> */}
        {/* <BlurFade delay={0.15 * 3} duration={0.25} inView> */}
        <StepCard
          num='03'
          Icon={Briefcase}
          title='Apply for a job or post an opening'
          desc='Search for opportunities as a job seeker or list vacancies as an
            employer'
        />
        {/* </BlurFade> */}
        {/* <BlurFade delay={0.15 * 4} duration={0.25} inView> */}
        <StepCard
          num='04'
          Icon={Wifi}
          title='Connect and start working'
          desc='Initiate collaborations and embark on new professional adventures
            with trusted partners'
        />
        {/* </BlurFade> */}
      </div>
    </div>
  );
}
