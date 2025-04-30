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

function OverflowingHeroImage({ ref, height, amount }) {
  const src = "/hero-pc.png";

  return (
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
  );
}

export default function Home() {
  const [ref, { height }] = useMeasure();
  const amount = 0.5;
  const remaining = 1 - amount;

  const [scrollRef, scrollTop] = useContaineirScroll();

  return (
    <div ref={scrollRef} className={clsx("max-h-full overflow-y-auto scroll-smooth")}>
      <TopNav scrollTop={scrollTop} />
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
