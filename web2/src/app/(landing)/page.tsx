"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { PropsWithChildren } from "react";

import { HowItWorks } from "./HowItWorks";
import { RoundPill } from "./RoundPill";
import { AboutUs } from "./AboutUs";
import { useMeasure } from "@uidotdev/usehooks";

function HeroShadow({ children }: PropsWithChildren) {
  return (
    <span className='text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      {children}
    </span>
  );
}

function PartialImage({ src, amount = 0.5 }: { src: string; amount?: number }) {
  const [ref, { height }] = useMeasure();
  return (
    <>
      <div className='relative'>
        <img
          ref={ref}
          src={src}
          className='pointer-events-none invisible absolute top-0 left-0 w-full max-w-full'
        />
        <div
          className='w-full max-w-full overflow-y-visible'
          style={{ height: (height ?? 0) * amount }}
        >
          <img src={src} className='w-full max-w-full' />
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <>
      <div
        className={clsx(
          // "min-h-[200vh]",
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

        {/* <div className='h-10' /> */}
        <PartialImage src='/hero-pc.png' />

        {/* <img src='/hero-mobile.png' className='w-full' /> */}
      </div>
    </>
  );
}

export default function Home() {
  return (
    <div className={clsx("max-h-full overflow-y-auto")}>
      <Hero />
      <AboutUs className="pt-72" />
      <HowItWorks />
      {/*  <div className='relative -top-[25vw] px-6 md:px-10 lg:px-20'>
        <div className='bg-red-400 p-6'>
          <img src='/hero-mobile.png' className='w-full' />
        </div>
      </div> */}
    </div>
  );
}
