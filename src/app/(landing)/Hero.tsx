"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
// import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { PropsWithChildren } from "react";

// import { RoundPill } from "./RoundPill";

function HeroShadow({ children }: PropsWithChildren) {
  return (
    <span className='text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      {children}
    </span>
  );
}

export function Hero({ children }: PropsWithChildren) {
  return (
    <div
      id='home'
      className={clsx(
        "py-28 pb-0 max-md:pt-8",
        "px-6 md:px-10 lg:px-20",
        "text-[#DBDBDB]",
        "bg-[#022127]",
        "relative"
      )}
    >
      <div
        className={clsx(
          "absolute top-1/2 left-1/2 h-[95%] w-[60%] bg-[#dedddd] bg-[size:10%_10%] opacity-5 blur-[1000px]",
          "-translate-x-1/2 -translate-y-1/2",
          "pointer-events-none"
        )}
      ></div>

      {/* Padding below top bar */}
      <div className='md:pt-20'></div>
      <div className='flex w-full items-center justify-center'>
        <div
          className={clsx(
            "flex flex-col items-start justify-between md:flex-row",
            "w-full max-w-7xl gap-x-4"
            // "gap-x-10 xl:gap-x-60 2xl:gap-x-80"
          )}
        >
          {/* Main Text */}
          <h1 className='text-between-xl-2xl mt-4 text-4xl leading-[105%] font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl'>
            <HeroShadow>Finding</HeroShadow>{" "}
            <AuroraText
              className='font-pjs font-bold'
              colors={["#81A7EB", "#956ED4", "#FE605D", "#F3C44D"]}
            >
              Seasonal
              <br /> Work
            </AuroraText>{" "}
            <HeroShadow>Made</HeroShadow>
            <br />
            <HeroShadow>Simple</HeroShadow>
          </h1>

          <div className='space-y-5'>
            <p className='mt-6 max-w-md text-lg 2xl:text-xl'>
              Seasonistas is a platform that connects seasonal workers and
              employers across Greece, helping them find the ideal job or the
              right person for their team.
            </p>
            <Button size='lg'>Get Started Now</Button>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
