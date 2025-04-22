import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import { repeatNode } from "@/lib/utils";
import clsx from "clsx";
import Image from "next/image";

/*
bg-[#022127]
*/

export default function Home() {
  return (
    <div className={clsx("max-h-full space-y-6 overflow-y-auto p-20")}>
      <h1 className='text-6xl leading-16 font-semibold'>
        Finding{" "}
        <AuroraText
          // className='font-semibold'
          colors={["#81A7EB", "#956ED4", "#FE605D", "#F3C44D"]}
        >
          Seasonal
          <br /> Work
        </AuroraText>{" "}
        Made
        <br />
        <SparklesText>Simple</SparklesText>
      </h1>
    </div>
  );
}
