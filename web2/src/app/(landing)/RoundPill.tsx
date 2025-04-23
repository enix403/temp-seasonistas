import clsx from "clsx";
import { CloudLightning } from "lucide-react";

export function RoundPill({
  label,
  className
}: {
  label: string;
  className?: string;
}) {
  // "w-fit rounded-full border  bg-white/[0.06] px-5 py-2",

  return (
    <div
      className={clsx(
        "w-fit rounded-full border bg-white/[0.06] px-5 py-2",
        "relative flex items-center gap-x-3 text-sm",
        className
      )}
    >
      <span className='text-[#2062A6]'>
        <CloudLightning fill='currentColor' size={20} stroke='currentColor' />
      </span>
      {label}
    </div>
  );
}