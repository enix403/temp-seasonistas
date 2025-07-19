"use client";
import Image from "next/image";
import logo from "~/app/assets/employer/logo.png";
import { ImCloudDownload } from "react-icons/im";
import { IoIosPrint } from "react-icons/io";
import { IoShareSocial, IoReturnUpBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function InvoiceDetails({ hasTitle }: { hasTitle: boolean }) {
  const router = useRouter();
  return (
    <div className='w-full'>
      {/* Top Navigation */}
      <h2
        className='mb-1 flex cursor-pointer items-center gap-2 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'
        onClick={() => router.back()}
      >
        <IoReturnUpBack size={25} className='font-semibold' />
        {hasTitle ? "Receipt ID" : "INV-1991"}
      </h2>
      <div className='mb-6 flex items-center justify-between px-2'>
        <div>
          <p className='text-sm leading-[22px] font-[400] text-[#1C252E]'>
            Payment <span className='text-[#919EAB]'>• Detail</span>
          </p>
        </div>
        <div className='flex gap-4 text-[#637381]'>
          <ImCloudDownload size={20} />
          <IoIosPrint size={20} />
          <IoShareSocial size={20} />
        </div>
      </div>

      {/* Main Container */}
      <div className='w-full space-y-6 rounded-2xl bg-white p-6 shadow-sm'>
        {/* Header */}
        <div className='flex flex-wrap items-start justify-between gap-4'>
          <div className='flex justify-between gap-2'>
            <div className='mt-4 w-[60%] sm:mt-0 sm:w-[20%]'>
              <Image src={logo} alt='Seasonistas Logo' />
            </div>
            <div className='flex flex-col items-end gap-2'>
              <span className='rounded-full bg-[#baeacc8e] px-4 py-1 text-[12px] text-[#22C55E]'>
                Paid
              </span>
              <p className='text-sm font-semibold text-[#1D2937] sm:text-lg'>
                INV-1991
              </p>
            </div>
          </div>

          <div className='text-sm text-gray-700'>
            <p className='font-semibold'>Invoice from</p>
            <p>Seasonistas</p>
            <p>1147 Rohan Drive Suite 819 - Burlington, VT / 82021</p>
            <p>Phone: +1 416-555-0198</p>
          </div>
          <div className='text-sm text-gray-700 sm:mr-12'>
            <p className='font-semibold'>Invoice to</p>
            <p>Deja Brady</p>
            <p>18605 Thompson Circle Apt. 086 - Idaho Falls, WV / 50337</p>
            <p>Phone: +44 20 7946 0958</p>
          </div>
        </div>

        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse text-left text-sm text-gray-700'>
            <thead className='bg-[#F6F8F9] font-medium text-gray-500'>
              <tr>
                <th className='px-4 py-3'>Plan Name</th>
                <th className='px-4 py-3'>Amount</th>
                <th className='px-4 py-3 whitespace-nowrap'>Time Period</th>
                <th className='px-4 py-3 whitespace-nowrap'>Billing Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='px-4 py-6'>Professional</td>
                <td className='px-4 py-6'>$250.00</td>
                <td className='px-4 py-6 whitespace-nowrap'>1 Month</td>
                <td className='px-4 py-6 whitespace-nowrap'>11/11/2024</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className='mt-6 flex justify-end'>
          <div className='space-y-2 text-right text-sm'>
            <div className='flex justify-between gap-12'>
              <span className='text-gray-500'>Subtotal</span>
              <span className='font-semibold text-[#1D2937]'>$2,373.51</span>
            </div>
            <div className='flex justify-between gap-12'>
              <span className='text-gray-500'>Fee</span>
              <span className='font-medium text-red-500'>- $85.21</span>
            </div>
            <div className='flex justify-between gap-12 border-t pt-1 font-semibold'>
              <span className='text-[#1D2937]'>Total</span>
              <span className='text-lg text-[#1D2937]'>$2,304.84</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
