import Link from "next/link";
import Image from "next/image";
import {
  CreditCard,
  HelpCircle,
  Instagram,
  Linkedin,
  Twitter,
  Youtube
} from "lucide-react";

export function Footer() {
  return (
    <footer className='bg-[#001a1e] pt-16 pb-6 text-white'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Menu Column */}
          <div>
            <h3 className='mb-6 text-xl font-semibold'>Menu</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/how-it-works'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href='/pricing'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className='mb-6 text-xl font-semibold'>Information</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/privacy-policy'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy-policy'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy-policy'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div>
            <h3 className='mb-6 text-xl font-semibold'>Get in Touch</h3>
            <ul className='space-y-3'>
              <li className='text-gray-300'>info@seasonistas.com</li>
              <li className='text-gray-300'>
                96 Dimitriou Gounari Street,
                <br />
                15125 Marousi, Attica, Greece
              </li>
            </ul>
          </div>

          {/* Company Info Column */}
          <div>
            <div className='mb-6'>
              <img
                src='/logo-big.png'
                alt='Seasonistas Logo'
                className='h-10 w-auto'
              />
            </div>

            <p className='mb-8 text-sm text-gray-300'>
              Seasonistas was born out of the need for fairer, more humane, and
              more stable conditions in seasonal professions. Our goal is to
              give a voice and real choices to those working in this sector.
            </p>

            <h3 className='mb-4 text-xl font-semibold'>Payment Method</h3>
            <div className='flex gap-3'>
              {/* Dummy payment icons using Lucide */}
              <div className='flex aspect-square items-center justify-center rounded-full bg-white p-2'>
                <VisaIcon className='h-2 w-auto' />
              </div>
              <div className='flex aspect-square items-center justify-center rounded-full bg-white p-2'>
                <VisaIcon className='h-2 w-auto' />
              </div>
              <div className='flex aspect-square items-center justify-center rounded-full bg-white p-2'>
                <VisaIcon className='h-2 w-auto' />
              </div>
              <div className='flex aspect-square items-center justify-center rounded-full bg-white p-2'>
                <VisaIcon className='h-2 w-auto' />
              </div>
              <div className='flex aspect-square items-center justify-center rounded-full bg-white p-2'>
                <VisaIcon className='h-2 w-auto' />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 border-t border-gray-800 pt-6'>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <div className='mb-4 flex gap-4 md:mb-0'>
              <Link
                href='#'
                className='rounded-full border border-gray-800 p-2 text-gray-400 transition-colors hover:text-white'
              >
                <Instagram className='h-5 w-5' />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link
                href='#'
                className='rounded-full border border-gray-800 p-2 text-gray-400 transition-colors hover:text-white'
              >
                <Linkedin className='h-5 w-5' />
                <span className='sr-only'>LinkedIn</span>
              </Link>
              <Link
                href='#'
                className='rounded-full border border-gray-800 p-2 text-gray-400 transition-colors hover:text-white'
              >
                <Twitter className='h-5 w-5' />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link
                href='#'
                className='rounded-full border border-gray-800 p-2 text-gray-400 transition-colors hover:text-white'
              >
                <Youtube className='h-5 w-5' />
                <span className='sr-only'>YouTube</span>
              </Link>
            </div>
            <div className='text-sm text-gray-400'>
              © 2025 Seasonistas. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const VisaIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox='0 0 26 9'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.4562 3.30646C13.4417 4.4551 14.4716 5.09604 15.2474 5.47719C16.0445 5.86821 16.3122 6.11893 16.3093 6.46853C16.3032 7.00372 15.6733 7.2399 15.0839 7.24915C14.0834 7.26475 13.4903 6.98504 13.0212 6.76366L12.9823 6.74533L12.6119 8.49279C13.0888 8.71434 13.9719 8.90761 14.8877 8.91607C17.0371 8.91607 18.4435 7.84639 18.4511 6.18793C18.4561 4.92878 17.4215 4.38125 16.5936 3.94308C16.0376 3.64874 15.5749 3.40383 15.5828 3.02586C15.5897 2.74059 15.8597 2.4362 16.4515 2.35874C16.7442 2.3197 17.5528 2.28974 18.4693 2.7153L18.8291 1.02468C18.3363 0.843667 17.7026 0.67041 16.9139 0.67041C14.8907 0.67041 13.4676 1.75455 13.4562 3.30646ZM22.286 0.816084C21.8936 0.816084 21.5627 1.04689 21.4151 1.40116L18.3446 8.79181H20.4925L20.92 7.60104H23.5448L23.7928 8.79181H25.6859L24.0339 0.816084H22.286ZM23.2064 5.96559L22.5865 2.97069L21.5087 5.96559H23.2064ZM10.8519 0.816084L9.15875 8.79181H11.2056L12.8979 0.816084H10.8519ZM5.69352 6.24468L7.82389 0.816084H9.97339L6.65718 8.79181H4.49403L2.86175 2.42704C2.76287 2.03523 2.67694 1.89105 2.37573 1.72626C1.88363 1.45632 1.07128 1.20402 0.356323 1.04768L0.405004 0.816084H3.8878C4.33126 0.816084 4.73056 1.1136 4.83173 1.62888L5.69352 6.24468Z'
      fill='url(#paint0_linear_224_377)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_224_377'
        x1='0.400475'
        y1='3.20652'
        x2='7.56013'
        y2='-6.87684'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#222357' />
        <stop offset={1} stopColor='#254AA5' />
      </linearGradient>
    </defs>
  </svg>
);
