"use client";

import clsx from "clsx";

import { HowItWorks } from "./HowItWorks";
import { AboutUs } from "./AboutUs";
import { useMeasure } from "@uidotdev/usehooks";

import { TopNav } from "./TopNav";

import { Pricing } from "./Pricing";
import { useContaineirScroll } from "@/hooks/useContaineirScroll";
import { Hero } from "./Hero";
import { ContactUs } from "./ContactUs";
import { MobileAppSection } from "./MobileAppPromo";
import { Footer } from "./Footer";
import { useEffect, useMemo } from "react";

function OverflowingHeroImage({ ref, height, amount }) {
  const src = "/hero-new.jpg";

  return (
    <div
      className={clsx(
        "relative mx-auto mt-16 max-w-7xl",
        "rounded-t-2xl border-[0.5px] border-[#80D6E2]/30 bg-white/10 p-4 pb-0 md:p-7"
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
          <img
            src={src}
            className='w-full max-w-full rounded-xl md:rounded-3xl'
          />
          {/**
           * Just so clicking on the "About Us" link scrolls to the correct
           * position, which just so happens to be here.
           * */}
          <div id='about-us' className='h-0 w-0' />
        </div>
      ) : null}
    </div>
  );
}

export default function Home() {
  const [ref, { height }] = useMeasure();
  const amount = 0.5;
  const remaining = 1 - amount;

  const [scrollRef, scrollTop] = useContaineirScroll();

  const selectedSectionIndex = useMemo(() => {
    if (typeof document === "undefined") return 0;

    const ids = [
      //
      "about-us",
      "how-it-works",
      "pricing-wrapper",
      "contact-us-wrapper"
    ];

    let selected = 0;

    let i = 1;
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && scrollTop >= el.offsetTop - 48) {
        selected = i++;
      } else {
        break;
      }
    }

    return selected;
  }, [scrollTop]);

  return (
    <div
      ref={scrollRef}
      className={clsx("max-h-full overflow-y-auto scroll-smooth")}
    >
      <TopNav
        scrollTop={scrollTop}
        selectedSectionIndexFromScroll={selectedSectionIndex}
      />
      <Hero>
        <OverflowingHeroImage ref={ref} height={height} amount={amount} />
      </Hero>
      <AboutUs
        style={{
          paddingTop: (height ?? 0) * remaining
        }}
        className='mt-10 mb-24 md:mt-20 md:mb-36'
      />
      <HowItWorks />
      <Pricing />
      <ContactUs />
      <MobileAppSection />
      <Footer />
    </div>
  );
}

/* ================= */
