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
      <h1 className='mt-32 text-7xl leading-20 font-medium'>
        Finding{" "}
        <AuroraText className="font-semibold" colors={["#81A7EB", "#956ED4", "#FE605D", "#F3C44D"]}>
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
