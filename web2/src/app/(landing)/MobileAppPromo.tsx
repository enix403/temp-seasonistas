import React from "react";
import { Button } from "@/components/ui/button";
import { RoundPill } from "./RoundPill";

export function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 24 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.0501 1.70874L12.6411 14.358L1.13631 27.1238C0.948556 26.8507 0.802489 26.5451 0.703963 26.2192C0.652227 25.85 0.652227 25.4741 0.703963 25.1049V3.38084C0.669481 2.79789 0.790166 2.21495 1.04878 1.70874M17.6343 8.84138L13.8506 13.012L2.39753 0.477904C2.76886 0.334749 3.16672 0.294902 3.5553 0.36279C4.16536 0.548744 4.74756 0.835053 5.28202 1.20844L15.6476 7.59136C16.3213 7.99426 16.9778 8.41782 17.6343 8.84138ZM13.852 15.7231L17.617 19.8377L14.8877 21.529L6.56048 26.6796C5.87086 27.1032 5.17858 27.5076 4.50486 27.9695C4.21665 28.1694 3.89339 28.2985 3.55672 28.3481C3.22005 28.3977 2.87774 28.3668 2.55269 28.2573L13.852 15.7231ZM23.6128 14.358C23.6232 14.8742 23.5063 15.3837 23.2749 15.8312C23.0434 16.2787 22.7062 16.6471 22.2999 16.8964L19.1886 18.8179L15.0946 14.358L19.2058 9.82132C20.2602 10.4751 21.2973 11.1289 22.333 11.7443C22.7463 12.001 23.0858 12.3827 23.3121 12.8453C23.5383 13.3079 23.6435 13.8324 23.6128 14.358Z'
        fill='#ECFAFA'
      />
    </svg>
  );
}

export function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 23 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.6708 28.7643C17.244 30.3034 15.6862 30.0604 14.1866 29.3313C12.5997 28.5861 11.1438 28.5537 9.46952 29.3313C7.37302 30.3358 6.26653 30.0442 5.01445 28.7643C-2.09036 20.6149 -1.04211 8.20456 7.0236 7.75092C8.98907 7.86433 10.3576 8.94983 11.5078 9.04704C13.2257 8.65821 14.8709 7.5403 16.7054 7.68612C18.9038 7.88053 20.5635 8.85262 21.6554 10.6024C17.113 13.6321 18.1904 20.2909 22.3543 22.1541C21.5244 24.5843 20.447 26.9983 18.6563 28.7805L18.6708 28.7643ZM11.3622 7.65371C11.1438 4.04077 13.779 1.05969 16.8073 0.768066C17.2295 4.94806 13.4005 8.05875 11.3622 7.65371Z'
        fill='black'
      />
    </svg>
  );
}

export function MobileAppSection() {
  return (
    <section className='bg-[#559093]/[0.12] py-16'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center gap-8 md:flex-row md:gap-16'>
          {/* Left side - Mobile App Image */}
          <div className='flex justify-center md:w-1/2'>
            <div className='relative'>
              <div className='absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-teal-400/30 md:h-[400px] md:w-[400px]'></div>
              <img
                src='/mobile-apps.png'
                alt='Seasonistas Mobile App'
                className='relative z-10 h-auto w-auto max-w-full md:max-h-[500px]'
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className='text-center md:w-1/2 md:text-left'>
            {/* <RoundPill label='Mobile App' /> */}

            <h1 className='mt-4 text-[#1E1E1E] max-md:text-4xl'>
              Download Our Mobile App
            </h1>

            <p className='mb-8 text-lg text-gray-600'>
              Download our app and stay connected wherever you are.
            </p>

            <div className='flex flex-col justify-center gap-4 font-pjs sm:flex-row md:justify-start'>
              <Button className='flex h-auto items-center gap-3 px-7' asChild>
                <a href='#download-android'>
                  <PlayIcon className='!size-6' />
                  <div className='flex flex-col items-start'>
                    <span className='text-[10px] leading-normal font-medium'>
                      Download on the
                    </span>
                    <span className='-mt-0.5 text-lg leading-normal font-semibold'>
                      Google Play
                    </span>
                  </div>
                </a>
              </Button>

              <Button
                className='flex h-auto items-center gap-3 border-black bg-transparent px-7 hover:bg-white'
                effect='ringHover'
                variant='outline'
                asChild
              >
                <a href='#download-ios'>
                  <AppleIcon className='!size-6' />
                  <div className='flex flex-col items-start'>
                    <span className='text-[10px] leading-normal font-medium'>
                      Download on the
                    </span>
                    <span className='-mt-0.5 text-lg leading-normal font-semibold'>
                      Apple Store
                    </span>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
