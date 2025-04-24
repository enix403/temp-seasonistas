"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";

import { ComponentProps } from "react";

export function BrandSheet({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div {...props} className={cn("relative bg-[#022127]", className)}>
      <div
        className={clsx(
          "absolute top-1/2 left-1/2 h-[95%] w-[60%] bg-[#dedddd] bg-[size:10%_10%] opacity-10 blur-[1000px]",
          "-translate-x-1/2 -translate-y-1/2 pointer-events-none"
        )}
      ></div>

      {children}
    </div>
  );
}
