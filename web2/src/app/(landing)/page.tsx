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
import { PricingCard } from "./PricingCard";

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

      <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {[
          {
            name: "Starter Plan",
            price: "0",
            description: "This package is ideal for individuals or tiny teams",
            benefits: [
              "10 GB Storage",
              "1 Year Support",
              "500 Applications",
              "Basic Analytics",
              "Free Subdomain"
            ]
          },
          {
            name: "Basic Plan",
            price: "20",
            description: "This package is ideal for small growing teams",
            benefits: [
              "500 GB Storage",
              "5 Year Support",
              "600 Queries",
              "Basic Analytics",
              "Free Subdomain"
            ]
          },
          {
            name: "Enter Price Plan",
            price: "46",
            description: "This plan fits mid-size hiring companies",
            benefits: [
              "800 GB Storage",
              "10 Year Support",
              "800 Applications",
              "Full Analytics",
              "Free Subdomain"
            ],
            isHighlighted: true
          },
          {
            name: "Unlimited Plan",
            price: "90",
            description: "This plan fits large teams or agencies",
            benefits: [
              "1000 GB Disk Space",
              "Unlimited Support",
              "Unlimited Applications",
              "Full Analytics",
              "Free Subdomain"
            ]
          }
        ].map((plan, index) => (
          <PricingCard
            key={index}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            benefits={plan.benefits}
            isHighlighted={plan.isHighlighted}
          />
        ))}
      </div>

      {/* <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>

      </div> */}
    </section>
  );
}
