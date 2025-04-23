"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { PropsWithChildren, useRef } from "react";

import { HowItWorks } from "./HowItWorks";
import { RoundPill } from "./RoundPill";
import { AboutUs } from "./AboutUs";
import { useMeasure, useWindowScroll } from "@uidotdev/usehooks";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Rocket,
  UserPlus,
  User,
  Briefcase,
  Shield,
  Menu
} from "lucide-react";

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
    </div>
  );
}

/* ================= */

function TopNav({ scrollTop }: { scrollTop: number }) {
  const [open, setOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  const scrolled = scrollTop > 10;

  return (
    <header
      className={`top-0 right-0 left-0 z-100 text-[#DBDBDB] md:transition-all duration-100 max-md:bg-[#022127] md:fixed ${
        scrolled ? "py-4 md:bg-[#022127] md:shadow-xl" : "py-8"
      }`}
    >
      <div className='px-6 md:px-10 lg:px-20'>
        <div className='flex items-center justify-between'>
          <div className='shrink-0'>
            <img
              src='/logo-big.png'
              alt='Seasonistas Logo'
              // width={40}
              // height={40}
              className='h-10 w-auto'
            />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden items-center rounded-full bg-white/[0.06] hover:text-white md:flex'>
            <Link
              href='/'
              className='rounded-full bg-white px-6 py-3 font-medium text-black'
            >
              Home
            </Link>
            <Link href='/about' className='px-4 py-3'>
              About Us
            </Link>
            <Link href='/how-it-works' className='px-4 py-3'>
              How It Works
            </Link>
            <Link href='/pricing' className='px-4 py-3'>
              Pricing
            </Link>
            <Link href='/contact' className='px-4 py-3 pr-7'>
              Contact Us
            </Link>
          </nav>

          <div className='flex items-center gap-1'>
            {/* Mobile Menu Button */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant='link'
                  size='icon'
                  className='text-white md:hidden'
                >
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side='left'
                className='w-[300px] border-r border-[#002a30] bg-[#001a1e] px-4 text-white'
              >
                <SheetHeader>
                  <div className='sr-only'>
                    <SheetTitle>Nav Sheet</SheetTitle>
                    <SheetDescription>Nav Sheet</SheetDescription>
                  </div>
                  <div className='mt-4 mb-8'>
                    <img
                      src='/logo-big.png'
                      alt='Seasonistas Logo'
                      className='h-10 w-auto'
                    />
                  </div>
                </SheetHeader>
                <div className='flex h-full flex-col'>
                  <nav className='flex flex-col space-y-4'>
                    <Link
                      href='/'
                      className='w-fit rounded-full bg-white px-6 py-2 font-medium text-black'
                      onClick={() => setOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href='/about'
                      className='px-2 py-1 text-white hover:text-gray-200'
                      onClick={() => setOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href='/how-it-works'
                      className='px-2 py-1 text-white hover:text-gray-200'
                      onClick={() => setOpen(false)}
                    >
                      How It Works
                    </Link>
                    <Link
                      href='/pricing'
                      className='px-2 py-1 text-white hover:text-gray-200'
                      onClick={() => setOpen(false)}
                    >
                      Pricing
                    </Link>
                    <Link
                      href='/contact'
                      className='px-2 py-1 text-white hover:text-gray-200'
                      onClick={() => setOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </nav>

                  <div className='mt-auto mb-8'>
                    <Button className='w-full' onClick={() => setOpen(false)}>
                      Login
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='link'
                  className='flex items-center gap-1 text-inherit'
                >
                  English <ChevronDown className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Greek</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className=''>Login</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
