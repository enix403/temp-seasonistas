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
        <AnimatedGradientText
          speed={0.5}
          stops={[
            { color: "#81A7EB", position: "0%" },
            { color: "#956ED4", position: "19%" },
            { color: "#FE605D", position: "41%" },
            { color: "#F3C44D", position: "75%" },
            { color: "#81A7EB", position: "100%" },
          ]}
        >
          Seasonal Work
        </AnimatedGradientText>{" "}
        Made
        <br /> Simple
      </h1>
    </div>
  );
}
