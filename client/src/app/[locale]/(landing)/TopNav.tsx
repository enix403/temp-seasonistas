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
import clsx from "clsx";

export function TopNav({
  scrollTop,
  selectedSectionIndexFromScroll
}: {
  scrollTop: number;
  selectedSectionIndexFromScroll: number;
}) {
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

  const sectionLinks = [
    { link: "#home", name: "Home" },
    { link: "#about-us", name: "About Us" },
    { link: "#how-it-works", name: "How It Works" },
    { link: "#pricing", name: "Pricing" },
    { link: "#contact-us", name: "Contact Us" }
  ];

  return (
    <header
      className={`top-0 right-0 left-0 z-40 text-[#DBDBDB] duration-100 max-md:bg-[#022127] sticky md:fixed md:transition-all ${scrolled ? "py-4 md:bg-[#022127] md:shadow-xl" : "py-8"
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
          <nav className='hidden items-center rounded-full bg-white/[0.06] md:flex'>
            {sectionLinks.map(({ link, name }, index) => {
              const selected = selectedSectionIndexFromScroll === index;
              return (
                <Link
                  key={link}
                  href={link}
                  className={clsx(
                    "px-6 py-3",
                    selected
                      ? "rounded-full bg-white font-medium text-black transition-all"
                      : "hover:text-white"
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </nav>

          <div className='flex z-50 items-center gap-1 max-sm:mt-3'>
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
                  <nav className='flex flex-col space-y-4 [&_p]:cursor-pointer [&_p]:hover:underline'>
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
              <DropdownMenuContent align='end' className='z-[101]'>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Greek</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className='w-full max-sm:w-1/3'>
              <Link href='/auth/login'>Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
