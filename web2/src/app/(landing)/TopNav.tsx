"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";

export function TopNav({ scrollTop }: { scrollTop: number }) {
  const [open, setOpen] = useState(false);
  const scrolled = scrollTop > 10;

  return (
    <header
      className={`top-0 right-0 left-0 z-100 text-[#DBDBDB] duration-100 max-md:bg-[#022127] md:fixed md:transition-all ${
        scrolled ? "py-4 md:bg-[#022127] md:shadow-xl" : "py-8"
      }`}
    >
      <div className='px-6 md:px-10 lg:px-20'>
        <div className='flex items-center justify-between'>
          <div className='shrink-0'>
            <img
              src='/logo-big.png'
              alt='Seasonistas Logo'
              className='h-10 w-auto'
            />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden items-center rounded-full bg-white/[0.06] hover:text-white md:flex'>
            <Link
              href='/'
              className='rounded-full bg-white px-6 py-3 font-medium text-black'
            >
              Home
            </Link>
            <Link href='/about' className='px-4 py-3'>
              About Us
            </Link>
            <Link href='/how-it-works' className='px-4 py-3'>
              How It Works
            </Link>
            <Link href='/pricing' className='px-4 py-3'>
              Pricing
            </Link>
            <Link href='/contact' className='px-4 py-3 pr-7'>
              Contact Us
            </Link>
          </nav>

          <div className='flex items-center gap-1'>
            {/* Mobile Menu Button */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant='link'
                  size='icon'
                  className='text-white md:hidden'
                >
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side='left'
                className='w-[300px] border-r border-[#002a30] bg-[#001a1e] px-4 text-white'
              >
                <SheetHeader>
                  <div className='sr-only'>
                    <SheetTitle>Nav Sheet</SheetTitle>
                    <SheetDescription>Nav Sheet</SheetDescription>
                  </div>
                  <div className='mt-4 mb-8'>
                    <img
                      src='/logo-big.png'
                      alt='Seasonistas Logo'
                      className='h-10 w-auto'
                    />
                  </div>
                </SheetHeader>
                <div className='flex h-full flex-col'>
                  <nav className='flex flex-col space-y-4'>
                    <Link
                      href='/'
                      className='w-fit rounded-full bg-white px-6 py-2 font-medium text-black'
                      onClick={() => setOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href='/about'
                      className='px-2 py-1 text-white hover:text-gray-200'
                      onClick={() => setOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href='/how-it-works'
                      className='px-2 py-1 text-white hover:text-gray-200'
                      onClick={() => setOpen(false)}
                    >
                      How It Works
                    </Link>
                    <Link
                      href='/pricing'
                      className='px-2 py-1 text-white hover:text-gray-200'
                      onClick={() => setOpen(false)}
                    >
                      Pricing
                    </Link>
                    <Link
                      href='/contact'
                      className='px-2 py-1 text-white hover:text-gray-200'
                      onClick={() => setOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </nav>

                  <div className='mt-auto mb-8'>
                    <Button className='w-full' onClick={() => setOpen(false)}>
                      Login
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='link'
                  className='flex items-center gap-1 text-inherit'
                >
                  English <ChevronDown className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Greek</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className=''>Login</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
