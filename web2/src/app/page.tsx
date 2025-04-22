"use client";

import React, { useEffect, useRef, useState } from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { CloudLightning } from "lucide-react";
import { PropsWithChildren } from "react";
import { useMeasure } from "@uidotdev/usehooks";

function HeroShadow({ children }: PropsWithChildren) {
  return (
    <span className='text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      {children}
    </span>
  );
}

function Hero() {
  return (
    <>
      <div
        className={clsx(
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
        <div
          className={clsx(
            "w-fit rounded-full border border-[#3D5C64] bg-white/[0.06] px-5 py-2",
            "flex items-center gap-x-3 text-sm"
          )}
        >
          <span className='text-[#2062A6]'>
            <CloudLightning
              fill='currentColor'
              size={20}
              stroke='currentColor'
            />
          </span>
          Hire Smart Faster
        </div>

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
        <div className='flex-1 max-md:w-full max-md:px-8 max-md:order-1'>
          <img src='/about-us.png' className='w-full max-w-full' />
        </div>

        <div className='flex-1 shrink-0 space-y-4'>
          <h1 className='max-md:text-4xl'>Connecting you is our job</h1>
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

export default function Home() {
  return (
    <div className={clsx("max-h-full overflow-y-auto")}>
      <Hero />
      <AboutUs />
      {/*  <div className='relative -top-[25vw] px-6 md:px-10 lg:px-20'>
        <div className='bg-red-400 p-6'>
          <img src='/hero-mobile.png' className='w-full' />
        </div>
      </div> */}
    </div>
  );
}
