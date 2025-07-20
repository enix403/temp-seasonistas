import Switch from "./Switch";

type SectionBlockProps = {
  index: number;
  title: string;
  desc?: string;
  children?: React.ReactNode;
  settings: any;
};

const SectionBlock = ({ index, title, desc, settings }: SectionBlockProps) => {
  return (
    <div key={index}>
      <div className='flex flex-col justify-between gap-6 lg:flex-row'>
        <div className='w-full lg:w-1/4'>
          <h3 className='text-[16px] leading-[24px] font-semibold sm:text-[18px]'>
            {title}
          </h3>
          <p className='mt-1 text-[14px] leading-[20px] text-[#767676] sm:text-[16px]'>
            {desc}
          </p>
        </div>
        <div className='flex w-full flex-col gap-4 lg:w-3/4'>
          {settings.map((item, i) => (
            <div
              key={i}
              className='flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center'
            >
              <div className='w-full sm:w-3/4'>
                <p className='mb-1 text-[15px] font-medium'>{item.title}</p>
                <p className='text-sm text-[#767676]'>{item.desc}</p>
              </div>
              <div className='sm:mr-4'>
                <Switch initial={item.initial} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionBlock;
