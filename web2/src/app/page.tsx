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
    <div className='min-h-screen bg-[#022127] px-(--spacing-hero) py-20 text-[#DBDBDB]'>
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
      <div className='flex items-start justify-between'>
        <h1 className='mt-4 text-6xl leading-16 font-semibold text-white'>
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
          <p className='mt-6 max-w-md text-xl'>
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
