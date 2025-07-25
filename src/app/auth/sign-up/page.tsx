"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { useForm } from "react-hook-form";

import { AuthPage } from "../common/AuthPage";
import { AuthQuote } from "../common/AuthQuote";
import { AnimatedColorfulText } from "../common/AnimatedColorfulText";
import { Testimonials } from "../common/Testimonials";
import { useState } from "react";
import { UserTypeSelector } from "./UserTypeSelector";
import { UserType } from "../common/UserType";
import { usePathname } from "next/navigation";

export default function SignUp() {
  const [selectedType, setSelectedType] = useState<UserType>("employer");

  return (
    <AuthPage
      title='Create an Account'
      subtitle='Use your company email to hire and collaborate with your team.'
      rightPane={
        <>
          <AuthQuote>
            <AnimatedColorfulText>Future-proof</AnimatedColorfulText> <br />
            your workforce
          </AuthQuote>
          {/* <Testimonials className='mt-20 xl:mt-24' /> */}
        </>
      }
    >
      <div className='mt-12' />

      <UserTypeSelector
        selectedType={selectedType}
        onSelect={setSelectedType}
      />

      <Button
        className='mt-14 w-full'
        size='lg'
        effect='expandIcon'
        icon={ArrowRightIcon}
        iconPlacement='right'
        asChild
      >
        <Link href={`/auth/sign-up/basic-info/${selectedType}`}>Continue</Link>
      </Button>

      <div className='mt-4 text-center text-sm text-[#475569]'>
        Already Have an Account?{" "}
        <Button
          asChild
          variant='link'
          className='px-0 py-0 font-bold text-foreground'
          effect='hoverUnderline'
        >
          <Link href='/auth/login'>Sign in</Link>
        </Button>
      </div>
    </AuthPage>
  );
}
