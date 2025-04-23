"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { TextAnimate } from "@/components/magicui/text-animate";

import { RoundPill } from "./RoundPill";
import { ComponentProps } from "react";

export function AboutUs({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      {...rest}
      className={clsx("lg:sx-24 px-8 md:px-14", className)}
    >
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
