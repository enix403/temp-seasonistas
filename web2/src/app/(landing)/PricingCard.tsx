import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/magicui/shine-border";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  benefits: string[];
  isHighlighted?: boolean;
}

/*

<div className='flex flex-col rounded-3xl border p-6'>
<h3 className='mb-8 text-lg font-bold'>Starter Plan</h3>
<div className='mb-8'>
  <div className='flex items-baseline'>
    <span className='text-4xl font-bold'>$0</span>
    <span className='ml-1 text-gray-500'>/ Per Month</span>
  </div>
  <p className='mt-6 text-gray-600'>
    This package is ideal for individuals or tiny teams
  </p>
</div>

<div className='mb-8 flex-grow space-y-3'>
  <div className='flex items-center'>
    <Check className='mr-2 h-5 w-5 text-teal-500' />
    <span>10 GB Storage</span>
  </div>
  <div className='flex items-center'>
    <Check className='mr-2 h-5 w-5 text-teal-500' />
    <span>1 Year Support</span>
  </div>
  <div className='flex items-center'>
    <Check className='mr-2 h-5 w-5 text-teal-500' />
    <span>500 Applications</span>
  </div>
  <div className='flex items-center'>
    <Check className='mr-2 h-5 w-5 text-teal-500' />
    <span>Basic Analytics</span>
  </div>
  <div className='flex items-center'>
    <Check className='mr-2 h-5 w-5 text-teal-500' />
    <span>Free Subdomain</span>
  </div>
</div>

<Button variant='outline' className='w-full'>
  Purchase Now
</Button>
</div>

*/

export function PricingCard({
  name,
  price,
  description,
  benefits,
  isHighlighted = false
}: PricingCardProps) {
  return (
    <div
      className={`${
        isHighlighted ? "bg-[#022127] text-white" : "border bg-white text-black"
      } flex flex-col rounded-3xl p-6`}
    >
      <h3 className='text-lg font-bold'>{name}</h3>
      <div className='mt-7'>
        <div className='flex items-baseline'>
          <span className='text-4xl font-bold'>${price}</span>
          <span
            className={`${isHighlighted ? "text-gray-300" : "text-gray-500"} ml-1`}
          >
            / Per Month
          </span>
        </div>
        <p
          className={`${isHighlighted ? "text-gray-300" : "text-gray-600"} mt-7`}
        >
          {description}
        </p>
      </div>

      <hr className='my-7 border-[#5B7486]/10' />

      <div className='mb-10 flex-grow space-y-3'>
        {benefits.map((benefit, index) => (
          <div key={index} className='flex items-center'>
            <div className='mr-3 shrink-0 rounded-full bg-primary p-0.5 text-white'>
              <Check className='size-4' />
            </div>
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      <Button
        variant={isHighlighted ? "default" : "outline"}
        className={`w-full`}
      >
        Purchase Now
      </Button>
    </div>
  );
}
