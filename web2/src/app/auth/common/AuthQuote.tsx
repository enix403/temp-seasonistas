import { ComponentProps } from "react";
import clsx from "clsx";

export function AuthQuote({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      {...props}
      className={clsx(
        "text-center text-4xl leading-[125%] font-bold tracking-tight text-white xl:text-5xl",
        className
      )}
    />
  );
}
