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

// const links = [
//   { label: "Home", href: "#home" },
//   { label: "About Us", href: "#about-us" },
//   { label: "How It Works", href: "#how-it-works" },
//   { label: "Pricing", href: "#pricin" },
//   { label: "Contact Us", href: "#home" }
// ];

export function TopNav({ scrollTop }: { scrollTop: number }) {
  const [open, setOpen] = useState(false);
  const scrolled = scrollTop > 10;

  const gotoSection = (selector: string) => {
    return (event: any) => {
      event?.preventDefault();
      setOpen(false);
      if (typeof document !== "undefined") {
        setTimeout(() => {
          document?.querySelector(selector)?.scrollIntoView({
            behavior: "instant",
            block: "start",
            inline: "nearest"
          });
        }, 500);
      }
      return false;
    };
  };

  return (
    <header
      className={`top-0 right-0 left-0 z-100 text-[#DBDBDB] duration-100 max-md:bg-[#022127] md:fixed md:transition-all ${
        scrolled ? "py-4 md:bg-[#022127] md:shadow-xl" : "py-8"
      }`}
    >
      <div className='px-6 md:px-10 lg:px-20'>
        <div className='flex-wrap items-center justify-between gap-y-2 sm:flex'>
          <div className='shrink-0 pr-2'>
            <img
              src='/logo-big.svg'
              alt='Seasonistas Logo'
              className='h-10 w-auto'
            />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden items-center rounded-full bg-white/[0.06] hover:text-white md:flex'>
            <Link
              href='#home'
              className='rounded-full bg-white px-6 py-3 font-medium text-black'
            >
              Home
            </Link>
            <Link href='#about-us' className='px-4 py-3'>
              About Us
            </Link>
            <Link href='#how-it-works' className='px-4 py-3'>
              How It Works
            </Link>
            <Link href='#pricing' className='px-4 py-3'>
              Pricing
            </Link>
            <Link href='#contact-us' className='px-4 py-3 pr-7'>
              Contact Us
            </Link>
          </nav>

          <div className='flex items-center gap-1 max-sm:mt-3'>
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
                      src='/logo-big.svg'
                      alt='Seasonistas Logo'
                      className='h-10 w-auto'
                    />
                  </div>
                </SheetHeader>
                <div className='flex h-full flex-col'>
                  <nav className='flex flex-col space-y-4 [&_p]:hover:underline [&_p]:cursor-pointer'>
                    <p
                      className='w-fit rounded-full bg-white px-6 py-2 font-medium text-black'
                      onClick={gotoSection("#home")}
                    >
                      Home
                    </p>
                    <p
                      className='px-2 py-1 text-white hover:text-gray-200'
                      onClick={gotoSection("#about-us")}
                    >
                      About Us
                    </p>
                    <p
                      className='px-2 py-1 text-white hover:text-gray-200'
                      onClick={gotoSection("#how-it-works")}
                    >
                      How It Works
                    </p>
                    <p
                      className='px-2 py-1 text-white hover:text-gray-200'
                      onClick={gotoSection("#pricing")}
                    >
                      Pricing
                    </p>
                    <p
                      className='px-2 py-1 text-white hover:text-gray-200'
                      onClick={gotoSection("#contact-us")}
                    >
                      Contact Us
                    </p>
                  </nav>

                  <div className='mt-auto mb-8'>
                    <Button asChild className='w-full'>
                      <Link href='/auth/login' onClick={() => setOpen(false)}>
                        Login
                      </Link>
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
              <DropdownMenuContent align='end' className="z-[101]">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Greek</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className='w-full max-sm:hidden'>
              <Link href='/auth/login'>Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
