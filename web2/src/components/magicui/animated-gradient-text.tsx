import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface GradientStop {
  color: string;
  position?: string; // e.g., "30%", "70%" etc.
}

export interface AnimatedGradientTextProps
  extends ComponentPropsWithoutRef<"div"> {
  speed?: number;
  stops?: GradientStop[];
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  stops = [
    { color: "#ffaa40", position: "0%" },
    { color: "#9c40ff", position: "50%" },
    { color: "#ffaa40", position: "100%" }
  ],
  ...props
}: AnimatedGradientTextProps) {
  const gradientStops = stops
    .map(stop =>
      stop.position ? `${stop.color} ${stop.position}` : stop.color
    )
    .join(", ");

  return (
    <span
      style={
        {
          "--bg-size": `${speed * 300}%`,
          "--gradient-stops": gradientStops
        } as React.CSSProperties
      }
      className={cn(
        `inline animate-gradient bg-[linear-gradient(to_right,var(--gradient-stops))] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

// import { cn } from "@/lib/utils";
// import { ComponentPropsWithoutRef } from "react";

// export interface AnimatedGradientTextProps
//   extends ComponentPropsWithoutRef<"div"> {
//   speed?: number;
//   colorFrom?: string;
//   colorTo?: string;
// }

// export function AnimatedGradientText({
//   children,
//   className,
//   speed = 1,
//   colorFrom = "#ffaa40",
//   colorTo = "#9c40ff",
//   ...props
// }: AnimatedGradientTextProps) {
//   return (
//     <span
//       style={
//         {
//           "--bg-size": `${speed * 300}%`,
//           "--color-from": colorFrom,
//           "--color-to": colorTo,
//         } as React.CSSProperties
//       }
//       className={cn(
//         `inline animate-gradient bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
//         className,
//       )}
//       {...props}
//     >
//       {children}
//     </span>
//   );
// }
