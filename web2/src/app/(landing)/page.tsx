"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { PropsWithChildren, useRef } from "react";

import { HowItWorks } from "./HowItWorks";
import { RoundPill } from "./RoundPill";
import { AboutUs } from "./AboutUs";
import { useMeasure } from "@uidotdev/usehooks";

import { useState, useEffect } from "react";
import { TopNav } from "./TopNav";

import { Check } from "lucide-react";

function HeroShadow({ children }: PropsWithChildren) {
  return (
    <span className='text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      {children}
    </span>
  );
}

function Hero({ children }: PropsWithChildren) {
  return (
    <>
      <div
        className={clsx(
          "py-20 pb-0 max-md:pt-8",
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

        {children}
      </div>
    </>
  );
}

function useContaineirScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  // Track scroll position to add shadow when scrolled past hero section
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      // Approximate height of the hero section (adjust as needed)
      // const heroHeight = 600;
      // setScrolled(scrollContainer.scrollTop > heroHeight);
      setScrollTop(scrollContainer.scrollTop);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return [scrollContainerRef, scrollTop] as const;
}

export default function Home() {
  const [ref, { height }] = useMeasure();
  const amount = 0.5;
  const remaining = 1 - amount;

  const src = "/hero-pc.png";

  const [scrollRef, scrollTop] = useContaineirScroll();

  return (
    <div ref={scrollRef} className={clsx("max-h-full overflow-y-auto")}>
      <TopNav scrollTop={scrollTop} />
      <Hero>
        <div
          className={clsx(
            "relative mx-auto mt-16 max-w-7xl",
            "rounded-t-2xl border-[0.5px] border-[#80D6E2]/30 bg-white/10 px-7 pt-7"
          )}
        >
          <img
            ref={ref}
            src={src}
            className='pointer-events-none invisible absolute top-0 left-0 w-full max-w-full'
          />
          {height ? (
            <div
              className='w-full max-w-full overflow-y-visible'
              style={{ height: (height ?? 0) * amount }}
            >
              <img src={src} className='w-full max-w-full' />
            </div>
          ) : null}
        </div>
      </Hero>
      <AboutUs
        style={{
          paddingTop: (height ?? 0) * remaining
        }}
        className='mt-10 mb-24 md:mt-20 md:mb-36'
      />
      <HowItWorks />
      <Pricing />
    </div>
  );
}

/* ================= */

function Pricing() {
  return (
    <section className='container mx-auto bg-white px-4 py-16 text-black'>
      <div className='flex flex-col items-center gap-y-4'>
        <RoundPill label='Pricing' />
        <h1 className='text-[#1E1E1E] max-md:text-4xl'>Our Pricing</h1>

        <p className='max-w-md text-center text-gray-600'>
          The pricing policy applies exclusively to professional accounts.
        </p>
      </div>

      <div className='grid mt-10 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {/* Starter Plan */}
        <div className='flex flex-col rounded-3xl border p-6'>
          <h3 className='mb-8 text-lg font-bold'>Starter Plan</h3>
          <div className='mb-8'>
            <div className='flex items-baseline'>
              <span className='text-4xl font-bold'>$0</span>
              <span className='ml-1 text-gray-500'>/ Per Month</span>
            </div>
            <p className='mt-6 text-gray-600'>
              This package is ideal for individuals or tiny teams
            </p>
          </div>

          <div className='mb-8 flex-grow space-y-3'>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>10 GB Storage</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>1 Year Support</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>500 Applications</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>Basic Analytics</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>Free Subdomain</span>
            </div>
          </div>

          <Button variant='outline' className='w-full'>
            Purchase Now
          </Button>
        </div>

        {/* Basic Plan */}
        <div className='flex flex-col rounded-3xl border p-6'>
          <h3 className='mb-6 text-lg font-bold'>Basic Plan</h3>
          <div className='mb-6'>
            <div className='flex items-baseline'>
              <span className='text-4xl font-bold'>$20</span>
              <span className='ml-1 text-gray-500'>/ Per Month</span>
            </div>
            <p className='mt-4 text-gray-600'>
              This package is ideal for small growing teams
            </p>
          </div>

          <div className='mb-8 flex-grow space-y-3'>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>500 GB Storage</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>5 Year Support</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>600 Queries</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>Basic Analytics</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>Free Subdomain</span>
            </div>
          </div>

          <Button variant='outline' className='w-full'>
            Purchase Now
          </Button>
        </div>

        {/* Enter Price Plan */}
        <div className='flex flex-col rounded-3xl bg-[#001a1e] p-6 text-white'>
          <h3 className='mb-6 text-lg font-bold'>Enter Price Plan</h3>
          <div className='mb-6'>
            <div className='flex items-baseline'>
              <span className='text-4xl font-bold'>$46</span>
              <span className='ml-1 text-gray-300'>/ Per Month</span>
            </div>
            <p className='mt-4 text-gray-300'>
              This plan fits mid-size hiring companies
            </p>
          </div>

          <div className='mb-8 flex-grow space-y-3'>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-400' />
              <span>800 GB Storage</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-400' />
              <span>10 Year Support</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-400' />
              <span>800 Applications</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-400' />
              <span>Full Analytics</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-400' />
              <span>Free Subdomain</span>
            </div>
          </div>

          <Button className='w-full bg-teal-500 hover:bg-teal-600'>
            Purchase Now
          </Button>
        </div>

        {/* Unlimited Plan */}
        <div className='flex flex-col rounded-3xl border p-6'>
          <h3 className='mb-6 text-lg font-bold'>Unlimited Plan</h3>
          <div className='mb-6'>
            <div className='flex items-baseline'>
              <span className='text-4xl font-bold'>$90</span>
              <span className='ml-1 text-gray-500'>/ Per Month</span>
            </div>
            <p className='mt-4 text-gray-600'>
              This plan fits large teams or agencies
            </p>
          </div>

          <div className='mb-8 flex-grow space-y-3'>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>1000 GB Disk Space</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>Unlimited Support</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>Unlimited Applications</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>Full Analytics</span>
            </div>
            <div className='flex items-center'>
              <Check className='mr-2 h-5 w-5 text-teal-500' />
              <span>Free Subdomain</span>
            </div>
          </div>

          <Button variant='outline' className='w-full'>
            Purchase Now
          </Button>
        </div>
      </div>
    </section>
  );
}
