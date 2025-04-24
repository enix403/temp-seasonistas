"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

import { AuthPage } from "../../common/AuthPage";
import { AuthQuote } from "../../common/AuthQuote";
import { AnimatedColorfulText } from "../../common/AnimatedColorfulText";
import { Testimonials } from "../../common/Testimonials";

import { Form } from "@/components/ui/form";

export default function VerifyPage() {
  const onSubmit = values => {
    console.log(values);
  };

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
          <Testimonials className='mt-20 xl:mt-24' />
        </>
      }
    >
      <Button
        type='submit'
        className='mt-6 w-full'
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
