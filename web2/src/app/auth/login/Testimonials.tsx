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
    return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);

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
        <div className='relative h-[300px] md:h-[250px]'>
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
                opacity: { duration: 0.5 }
              }}
              className='absolute w-full'
            >
              <div className='relative'>
                <Quote className='mb-4 h-12 w-12 text-[#2a4a50]' />
                <h2 className='mb-8 max-w-2xl leading-6 text-lg font-bold text-white'>
                  {testimonials[currentIndex].quote}
                </h2>
                <div className='flex items-center gap-4'>
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
        <div className='mt-8 flex justify-end gap-2'>
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
