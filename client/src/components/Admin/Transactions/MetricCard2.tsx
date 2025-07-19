import Image from "next/image";

type Props = {
  title: string;
  value: string;
  bars: number[];
  barColor: string;
};

const MetricCard = ({ title, value, bars, barColor }: Props) => {
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
              className='w-[5px] rounded-sm'
              style={{ height: `${height + 10}px`, backgroundColor: barColor }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
