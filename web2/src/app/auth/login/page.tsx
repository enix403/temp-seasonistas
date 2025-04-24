"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { BrandSheet } from "./BrandSheet";
import { AnimatedColorfulText } from "./AnimatedColorfulText";
import { GoogleIcon } from "./icons";

import { Testimonials } from "./Testimonials";

export default function Login() {
  const { register, handleSubmit } = useForm();

  return (
    <div className='flex h-full max-h-full flex-col bg-white font-pjs md:p-10'>
      <div className='flex flex-1-fix flex-col'>
        <div
          className='mx-auto flex w-full max-w-[88rem] flex-1-fix overflow-hidden border border-border bg-white md:rounded-3xl'
          style={{
            boxShadow: "24px 16px 94.3px 0px rgba(0, 0, 0, 0.12)"
          }}
        >
          <div className='h-full max-h-full flex-1 overflow-y-auto p-6 sm:p-16 lg:max-w-1/2'>
            <Button
              variant='link'
              className='p-0 text-foreground'
              icon={ArrowLeftIcon}
            >
              Back
            </Button>

            <h1 className='mt-6 text-3xl font-semibold text-[#1E1E1E] max-md:text-xl'>
              Login into your Account
            </h1>

            <p className='mt-1 max-w-md text-gray-600'>
              Use your company email to hire and collaborate with your team.
            </p>

            <Button variant='outline' className='w-full' asChild>
              <a href='#' className='mt-6'>
                {GoogleIcon}
                Sign in with Google
              </a>
            </Button>

            <div className='relative my-6 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
              <span className='relative z-10 bg-background px-3 text-muted-foreground'>
                Sign In with Other Email
              </span>
            </div>

            <form onSubmit={handleSubmit(() => {})} className='grid gap-6'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='Enter email'
                  {...register("email")}
                />
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                  <Link
                    href='#'
                    className='ml-auto text-xs underline-offset-4 hover:underline'
                    tabIndex={-1}
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id='password'
                  type='password'
                  placeholder='Enter password'
                  {...register("password")}
                />
              </div>
              <Button
                // loading={loginMut.isPending}
                type='submit'
                className='w-full'
                size='lg'
                effect='expandIcon'
                icon={ArrowRightIcon}
                iconPlacement='right'
              >
                Continue
              </Button>
            </form>

            <div className='mt-4 text-center text-sm text-[#475569]'>
              Create New Account?{" "}
              <Button
                asChild
                variant='link'
                className='px-0 py-0 font-bold text-foreground'
                effect='hoverUnderline'
              >
                <Link href='#'>Sign up</Link>
              </Button>
            </div>
          </div>
          <div className='relative flex-1-fix shrink-0 max-lg:hidden'>
            <BrandSheet className='absolute inset-0 flex flex-col items-center px-16 py-6 pt-24 xl:px-20'>
              <h1 className='mt-4 text-center text-4xl leading-[125%] font-bold tracking-tight text-white xl:text-5xl'>
                <AnimatedColorfulText>
                  Sign up in just 2 minutes.
                </AnimatedColorfulText>{" "}
                win seasons with <br />
                the right talent.
              </h1>
              <Testimonials className='mt-20 self-stretch xl:mt-24' />
            </BrandSheet>
          </div>
        </div>
      </div>
    </div>
  );
}
