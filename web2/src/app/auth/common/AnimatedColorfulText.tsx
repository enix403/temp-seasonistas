import { AuroraText } from "@/components/magicui/aurora-text";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

/* It must be used inside a text element like <h1> or <p> */
export function AnimatedColorfulText({
  className,
  ...props
}: ComponentProps<typeof AuroraText>) {
  return (
    <AuroraText
      {...props}
      className={cn("font-pjs font-bold", className)}
      colors={["#81A7EB", "#956ED4", "#FE605D", "#F3C44D"]}
    />
  );
}

/*

rust
golang


*/