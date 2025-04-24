"use client";

import { ComponentProps, useEffect, useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "How do you manage seasonal hiring spikes with a small HR team? Our platform helped us scale workforce seamlessly during peak seasons.",
    name: "Alex Morgan",
    role: "Campus Recruitment Head at SummerTech",
    avatar: "/pfp-1.png"
  },
  {
    id: 2,
    quote:
      "Seasonistas transformed our hiring process. We can now onboard 200+ seasonal staff in just two weeks instead of two months.",
    name: "Maria Rodriguez",
    role: "HR Director at Coastal Resorts",
    avatar: "/pfp-1.png"
  },
  {
    id: 3,
    quote:
      "The platform's verification system saved us countless hours of background checks. Our seasonal staff quality improved dramatically.",
    name: "James Wilson",
    role: "Operations Manager at HarvestCrew",
    avatar: "/pfp-1.png"
  }
];

export function Testimonials({ className, ...props }: ComponentProps<"div">) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div {...props} className={clsx(className)}>
      <div className='w-full max-w-3xl'>
        <div className='relative'>
          <AnimatePresence initial={false} custom={direction} mode='wait'>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className='w-full'
            >
              <div className='relative'>
                {/* <Quote className='mb-4 h-12 w-12 text-[#2a4a50]' /> */}
                <div className='mb-7 flex items-end gap-5'>
                  <svg
                    className='w-10 shrink-0'
                    viewBox='0 0 41 34'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.3'
                      d='M23.4712 33.6681V23.1625C23.4712 17.1475 24.8879 12.2037 27.7212 8.33101C30.6379 4.37595 34.8462 1.82165 40.3462 0.668091V7.46584C37.6795 8.12502 35.5962 9.36097 34.0962 11.1737C32.5962 12.904 31.6795 15.0464 31.3462 17.6007H37.8462V33.6681H23.4712ZM0.346191 33.6681V23.1625C0.346191 17.1475 1.76286 12.2037 4.59619 8.33101C7.51286 4.37595 11.7212 1.82165 17.2212 0.668091V7.46584C14.5545 8.12502 12.4712 9.36097 10.9712 11.1737C9.47119 12.904 8.55452 15.0464 8.22119 17.6007H14.7212V33.6681H0.346191Z'
                      fill='#94A3B8'
                    />
                  </svg>

                  <h2 className='max-w-2xl flex-1 text-lg leading-6 font-bold text-white'>
                    {testimonials[currentIndex].quote}
                  </h2>
                </div>
                <div className='pl-7s flex items-center gap-4'>
                  <div className='relative h-14 w-14 overflow-hidden rounded-full'>
                    <Image
                      src={
                        testimonials[currentIndex].avatar || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].name}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <p className='font-medium text-white'>
                      {testimonials[currentIndex].name}
                    </p>
                    <p className='text-sm text-gray-400'>
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots navigation */}
        <div className='flex justify-end gap-2 mt-14'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-0.5 w-6 rounded-full transition-all ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
