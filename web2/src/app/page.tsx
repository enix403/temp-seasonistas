"use client";

import React, { useEffect, useRef, useState } from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { CloudLightning, Wifi } from "lucide-react";
import { PropsWithChildren } from "react";
import {
  ChevronDown,
  Rocket,
  UserPlus,
  User,
  Briefcase,
  Shield
} from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";

import { ShineBorder } from "@/components/magicui/shine-border";

function HeroShadow({ children }: PropsWithChildren) {
  return (
    <span className='text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      {children}
    </span>
  );
}

function RoundPill({
  label,
  className
}: {
  label: string;
  className?: string;
}) {
  // "w-fit rounded-full border  bg-white/[0.06] px-5 py-2",

  return (
    <div
      className={clsx(
        "w-fit rounded-full border bg-white/[0.06] px-5 py-2",
        "relative flex items-center gap-x-3 text-sm",
        className
      )}
    >
      <span className='text-[#2062A6]'>
        <CloudLightning fill='currentColor' size={20} stroke='currentColor' />
      </span>
      {label}
    </div>
  );
}

function Hero() {
  return (
    <>
      <div
        className={clsx(
          "min-h-screen",
          "py-20 pb-0",
          "px-6 md:px-10 lg:px-20",
          "text-[#DBDBDB]",
          "bg-[#022127]",
          "relative"
          // <div class="relative h-full w-full bg-neutral-900"></div>
        )}
      >
        <div
          className={clsx(
            "absolute top-1/2 left-1/2 h-[95%] w-[60%] bg-[#dedddd] bg-[size:10%_10%] opacity-5 blur-[1000px]",
            "-translate-x-1/2 -translate-y-1/2"
          )}
        ></div>

        <RoundPill label='Hire Smart Faster' className='border-[#3D5C64]' />

        <div className='flex flex-col items-start gap-x-10 max-xl:justify-between md:flex-row xl:gap-x-60 2xl:gap-x-80'>
          {/* Main Text */}
          <h1 className='mt-4 text-4xl leading-[105%] font-semibold text-white sm:text-5xl md:text-6xl xl:text-7xl'>
            <HeroShadow>Finding</HeroShadow>{" "}
            <AuroraText colors={["#81A7EB", "#956ED4", "#FE605D", "#F3C44D"]}>
              Seasonal
              <br /> Work
            </AuroraText>{" "}
            <HeroShadow>Made</HeroShadow>
            <br />
            <SparklesText>
              <HeroShadow>Simple</HeroShadow>
            </SparklesText>
          </h1>

          <div className='space-y-5'>
            <p className='mt-6 max-w-md text-lg md:text-xl'>
              Seasonistas is a platform that connects seasonal workers and
              employers across Greece, helping them find the ideal job or the
              right person for their team.
            </p>
            <Button size='lg'>Get Started Now</Button>
          </div>
        </div>

        <div className='h-10' />

        {/* <img src='/hero-mobile.png' className='w-full' /> */}
      </div>
    </>
  );
}

function AboutUs() {
  return (
    <div className={clsx("py-10", "lg:sx-24 px-8 md:px-14")}>
      <div className='mx-auto flex max-w-7xl flex-col items-start gap-y-12 md:flex-row md:gap-x-14 lg:gap-x-28'>
        <div className='flex-1 max-md:order-1 max-md:w-full max-md:px-8'>
          <img src='/about-us.png' className='w-full max-w-full' />
        </div>

        <div className='flex-1 shrink-0 space-y-4 md:pt-5'>
          <RoundPill label='About Us' className='border-[#E2E8EA]' />

          <TextAnimate
            animation='slideUp'
            as='h1'
            className='text-[#1E1E1E] max-md:text-4xl'
          >
            Connecting you is our job
          </TextAnimate>

          <h3>Connecting Seasonal Talent with Opportunity</h3>
          <div className='text-lg font-normal text-[#49565A]'>
            <p>
              Seasonistas was created by a team of people with firsthand
              experience in seasonal work and the challenges that come with it.
            </p>
            <p>
              That’s exactly why we built a platform that helps seasonal
              professionals find the right job and businesses build the right
              team.
            </p>
          </div>
          <Button size='lg'>Get Started Now</Button>
        </div>
      </div>
    </div>
  );
}

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

function HowItWorks() {
  return (
    <div
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
        <BlurFade delay={0.15 * 1} duration={0.25} inView>
          <StepCard
            num='01'
            Icon={UserPlus}
            title='Sign Up or Login'
            desc='Create an account or login with an existing profile to begin your
            professional journey'
          />
        </BlurFade>
        <BlurFade delay={0.2 * 2} duration={0.25} inView>
          <StepCard
            num='02'
            Icon={User}
            title='Create your work profile'
            desc='Build your professional identity with skills, experience, and
            portfolio details'
          />
        </BlurFade>
        <BlurFade delay={0.15 * 3} duration={0.25} inView>
          <StepCard
            num='03'
            Icon={Briefcase}
            title='Apply for a job or post an opening'
            desc='Search for opportunities as a job seeker or list vacancies as an
            employer'
          />
        </BlurFade>
        <BlurFade delay={0.15 * 4} duration={0.25} inView>
          <StepCard
            num='04'
            Icon={Wifi}
            title='Connect and start working'
            desc='Initiate collaborations and embark on new professional adventures
            with trusted partners'
          />
        </BlurFade>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className={clsx("max-h-full overflow-y-auto")}>
      <Hero />
      <AboutUs />
      <HowItWorks />
      {/*  <div className='relative -top-[25vw] px-6 md:px-10 lg:px-20'>
        <div className='bg-red-400 p-6'>
          <img src='/hero-mobile.png' className='w-full' />
        </div>
      </div> */}
    </div>
  );
}
