import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { CloudLightning } from "lucide-react";
import { PropsWithChildren } from "react";

function HeroShadow({ children }: PropsWithChildren) {
  return (
    <span className='text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      {children}
    </span>
  );
}

function Hero() {
  return (
    <div
      className={clsx(
        "min-h-screen py-20",
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
          <CloudLightning fill='currentColor' size={20} stroke='currentColor' />
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
          {/* <SparklesText> */}
          <HeroShadow>Simple</HeroShadow>
          {/* </SparklesText> */}
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
    </div>
  );
}

export default function Home() {
  return (
    <div className={clsx("max-h-full overflow-y-auto")}>
      <Hero />
    </div>
  );
}
