"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

import { AuthPage } from "../../common/AuthPage";
import { AuthQuote } from "../../common/AuthQuote";
import { AnimatedColorfulText } from "../../common/AnimatedColorfulText";
import { Testimonials } from "../../common/Testimonials";

import { OTPInput } from "input-otp";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

function OTPInputWrapper() {
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <OTPInput
      ref={ref}
      containerClassName='flex items-center gap-3 has-disabled:opacity-50'
      minLength={5}
      maxLength={5}
      render={({ slots }) => (
        <div className='flex gap-2'>
          {slots.map((slot, index) => (
            <div
              key={index}
              className={cn(
                "flex size-14 items-center justify-center rounded-full bg-[#ECF2F9] font-medium text-foreground shadow-xs transition-[color,box-shadow]",
                { "z-10 border-ring ring-[3px] ring-primary/50": slot.isActive }
              )}
            >
              {slot.char !== null && <div>{slot.char}</div>}
            </div>
          ))}
        </div>
      )}
    />
  );
}

export default function VerifyPage() {
  return (
    <AuthPage
      title='Enter OTP'
      subtitle='OTP Sent to Your Email support@seasonaljob.com.'
      rightPane={
        <>
          <AuthQuote>
            <AnimatedColorfulText>Future-proof</AnimatedColorfulText> <br />
            your workforce.
          </AuthQuote>
          {/* <Testimonials className='mt-20 xl:mt-24' /> */}
        </>
      }
    >
      <OTPInputWrapper />

      <Button className='mt-4' variant='ghost' effect='hoverUnderline'>
        Resend OTP
      </Button>

      <Button
        className='mt-5 w-full'
        size='lg'
        effect='expandIcon'
        icon={ArrowRightIcon}
        iconPlacement='right'
      >
        Continue
      </Button>
    </AuthPage>
  );
}
