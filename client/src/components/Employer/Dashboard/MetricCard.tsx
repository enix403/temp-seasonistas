import Image from "next/image";
import risingArrow from "@/assets/employer/dashboard/risingArrow.png";
import fallingArrow from "@/assets/employer/dashboard/fallingArrow.png";

type Props = {
  title: string;
  value: string;
  change: number;
  subtitle: string;
  bars: number[];
};

const MetricCard = ({ title, value, change, subtitle, bars }: Props) => {
  const isNegative = change < 0;

  const finalColor = isNegative ? "red" : "green";

  const barColor =
    finalColor === "green"
      ? "bg-[#00A76F]"
      : finalColor === "red"
        ? "bg-[#EF4444]"
        : "bg-[#22C55E]";

  const percentColor =
    finalColor === "green"
      ? "text-[#00A76F]"
      : finalColor === "red"
        ? "text-red-600"
        : "text-green-600";

  const arrowIcon = isNegative ? fallingArrow : risingArrow;

  return (
    <div className='flex max-h-[162px] w-full flex-col justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm'>
      {/* Title */}
      <p className='text-[14px] leading-[22px] font-[500] text-[#1C252E]'>
        {title}
      </p>

      {/* Value + Bar Chart */}
      <div className='mt-1 flex items-end justify-between'>
        <h2 className='text-[32px] leading-[48px] font-[700] text-[#11142D]'>
          {value}
        </h2>
        <div className='flex h-12 items-end gap-[2px]'>
          {bars.map((height, index) => (
            <div
              key={index}
              className={`${barColor} w-[5px] rounded-sm`}
              style={{ height: `${height + 10}px` }}
            />
          ))}
        </div>
      </div>

      {/* Change Info */}
      <div className='mt-2 flex items-center gap-1 text-sm font-normal text-[#637381]'>
        <Image src={arrowIcon} alt='change' width={25} height={25} />
        <span className={`font-semibold ${percentColor}`}>
          {change > 0 ? `+${change}%` : `${change}%`}
        </span>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default MetricCard;
