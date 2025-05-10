"use client";

import { RoundPill } from "./RoundPill";

import { PricingCard } from "./PricingCard";

type PricingPlan = {
  name: string;
  price: number;
  description: string;
  benefits: string[];
  isHighlighted?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: 25,
    description: "This package is ideal for individuals or tiny teams just getting started.",
    benefits: [
      "0–5 ads",
      "CV Search",
      "Search for Specialized CVs",
      "Detailed Statistics",
      "Access to chat",
      "Video Interviews",
      "Automatic notifications",
      "Professional networking",
    ],
  },
  {
    name: "Standard",
    price: 75,
    description: "Perfect for small businesses looking to expand their reach affordably.",
    benefits: [
      "6–15 ads",
      "CV Search",
      "Search for Specialized CVs",
      "Detailed Statistics",
      "Access to chat",
      "Video Interviews",
      "Automatic notifications",
      "Professional networking",
    ],
  },
  {
    name: "Premium",
    price: 120,
    description: "Designed for growing companies that need more capacity and insights.",
    benefits: [
      "16–30 ads",
      "CV Search",
      "Search for Specialized CVs",
      "Detailed Statistics",
      "Access to chat",
      "Video Interviews",
      "Automatic notifications",
      "Professional networking",
    ],
    isHighlighted: true,
  },
  {
    name: "Platinum",
    price: 200,
    description: "Our most comprehensive plan for enterprises with high-volume needs.",
    benefits: [
      "30+ ads",
      "CV Search",
      "Search for Specialized CVs",
      "Detailed Statistics",
      "Access to chat",
      "Video Interviews",
      "Automatic notifications",
      "Professional networking",
    ],
  },
];


export function Pricing() {
  return (
    <section
      id='pricing'
      className='container mx-auto bg-white px-4 py-16 text-black'
    >
      <div className='flex flex-col items-center gap-y-4'>
        {/* <RoundPill label='Pricing' /> */}
        <h1 className='text-[#1E1E1E] max-md:text-4xl'>Our Pricing</h1>

        <p className='max-w-md text-center text-gray-600'>
          The pricing policy applies exclusively to professional accounts.
        </p>
      </div>

      <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            name={plan.name}
            price={`€${plan.price}`}
            description={plan.description}
            benefits={plan.benefits}
            isHighlighted={plan.isHighlighted}
          />
        ))}
      </div>
    </section>
  );
}
