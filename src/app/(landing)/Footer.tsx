import Link from "next/link";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

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
                src='/logo-big.svg'
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
              <div className='flex items-center justify-center overflow-hidden rounded-full bg-white p-1.5'>
                <img src='/footer-payment/visa.png' className='h-7 w-7' />
              </div>
              <div className='flex items-center justify-center overflow-hidden rounded-full bg-white p-1.5'>
                <img src='/footer-payment/mastercard.png' className='h-7 w-7' />
              </div>
              <div className='flex items-center justify-center overflow-hidden rounded-full bg-white p-1.5'>
                <img src='/footer-payment/paypal.png' className='h-7 w-7' />
              </div>
              <div className='flex items-center justify-center overflow-hidden rounded-full bg-white p-1.5'>
                <img src='/footer-payment/applepay.png' className='h-7 w-7' />
              </div>
              <div className='flex items-center justify-center overflow-hidden rounded-full bg-white p-1.5'>
                <img src='/footer-payment/gpay.png' className='h-7 w-7' />
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
