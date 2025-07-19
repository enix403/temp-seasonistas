import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { ShineBorder } from "@/components/magicui/shine-border";
import clsx from "clsx";

interface PricingCardProps {
  name: string;
  isEmployee?: boolean;
  price: string;
  description: string;
  benefits: string[];
  isHighlighted?: boolean;
}

export function PricingCard({
  isEmployee,
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
          <span className='text-4xl font-bold'>{price}</span>
          <span
            className={`${isHighlighted ? "text-gray-300" : "text-gray-500"} ml-1`}
          >
            / Per Year
          </span>
        </div>
        <p
          className={`${isHighlighted ? "text-gray-300" : "text-gray-600"} mt-7`}
        >
          {description}
        </p>
      </div>

      <hr
        className={clsx(
          "my-7",
          isHighlighted ? "border-[#E3E4E5]/20" : "border-[#5B7486]/10"
        )}
      />

      <div className='mb-10 flex-grow space-y-3'>
        {benefits.map((benefit, index) => (
          <div key={index} className='flex items-center'>
            <div
              className={clsx(
                "mr-3 shrink-0 rounded-full bg-primary p-0.5 text-white"
              )}
            >
              <Check className='size-4' />
            </div>
            <span className={clsx(isHighlighted && "font-semibold")}>
              {benefit}
            </span>
          </div>
        ))}
      </div>

      {!isEmployee && (
        <Button
          variant={isHighlighted ? "default" : "outline"}
          className={`w-full`}
        >
          Purchase Now
        </Button>
      )}
    </div>
  );
}
