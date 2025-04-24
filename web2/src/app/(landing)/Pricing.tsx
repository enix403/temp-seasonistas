"use client";

import { RoundPill } from "./RoundPill";

import { PricingCard } from "./PricingCard";

export function Pricing() {
  return (
    <section id="pricing" className='container mx-auto bg-white px-4 py-16 text-black'>
      <div className='flex flex-col items-center gap-y-4'>
        <RoundPill label='Pricing' />
        <h1 className='text-[#1E1E1E] max-md:text-4xl'>Our Pricing</h1>

        <p className='max-w-md text-center text-gray-600'>
          The pricing policy applies exclusively to professional accounts.
        </p>
      </div>

      <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {[
          {
            name: "Starter Plan",
            price: "0",
            description: "This package is ideal for individuals or tiny teams",
            benefits: [
              "10 GB Storage",
              "1 Year Support",
              "500 Applications",
              "Basic Analytics",
              "Free Subdomain"
            ]
          },
          {
            name: "Basic Plan",
            price: "20",
            description: "This package is ideal for small growing teams",
            benefits: [
              "500 GB Storage",
              "5 Year Support",
              "600 Queries",
              "Basic Analytics",
              "Free Subdomain"
            ]
          },
          {
            name: "Enter Price Plan",
            price: "46",
            description: "This plan fits mid-size hiring companies",
            benefits: [
              "800 GB Storage",
              "10 Year Support",
              "800 Applications",
              "Full Analytics",
              "Free Subdomain"
            ],
            isHighlighted: true
          },
          {
            name: "Unlimited Plan",
            price: "90",
            description: "This plan fits large teams or agencies",
            benefits: [
              "1000 GB Disk Space",
              "Unlimited Support",
              "Unlimited Applications",
              "Full Analytics",
              "Free Subdomain"
            ]
          }
        ].map((plan, index) => (
          <PricingCard
            key={index}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            benefits={plan.benefits}
            isHighlighted={plan.isHighlighted}
          />
        ))}
      </div>
    </section>
  );
}
