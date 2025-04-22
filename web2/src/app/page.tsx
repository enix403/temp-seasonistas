import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className={clsx(
        "grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-start gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20",
        "bg-[#022127] text-white"
      )}
    >
      <h1 className='mt-32 text-6xl leading-16 font-semibold'>
        Finding{" "}
        <AnimatedGradientText speed={0.5} colorFrom='#FE605D' colorTo='#81A7EB'>
          Seasonal Work
        </AnimatedGradientText>{" "}
        Made
        <br /> Simple
      </h1>
    </div>
  );
}

{
  /* <AnimatedGradientText speed={0.5} colorFrom='#FE605D' colorTo='#81A7EB'> */
}
{
  /* <AnimatedGradientText speed={0.5} colorFrom='#81A7EB' colorTo='#FE605D'> */
}
