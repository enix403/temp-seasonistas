"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { repeatNode } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { useForm } from "react-hook-form";

const GoogleIcon = (
  <svg
    width={20}
    height={20}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_85_580)'>
      <path
        d='M19.8052 10.2303C19.8052 9.55056 19.7501 8.86711 19.6325 8.19836H10.2002V12.0492H15.6016C15.3775 13.2911 14.6573 14.3898 13.6027 15.0879V17.5866H16.8252C18.7176 15.8449 19.8052 13.2728 19.8052 10.2303Z'
        fill='#4285F4'
      />
      <path
        d='M10.2002 20.0006C12.8972 20.0006 15.1717 19.1151 16.8289 17.5865L13.6064 15.0879C12.7098 15.6979 11.5524 16.0433 10.2038 16.0433C7.59499 16.0433 5.38297 14.2832 4.58929 11.9169H1.26392V14.4927C2.96151 17.8695 6.41916 20.0006 10.2002 20.0006Z'
        fill='#34A853'
      />
      <path
        d='M4.58564 11.9169C4.16676 10.6749 4.16676 9.33008 4.58564 8.08811V5.51233H1.26395C-0.154389 8.33798 -0.154389 11.667 1.26395 14.4927L4.58564 11.9169Z'
        fill='#FBBC04'
      />
      <path
        d='M10.2002 3.95805C11.6258 3.936 13.0038 4.47247 14.0363 5.45722L16.8913 2.60218C15.0835 0.904587 12.6841 -0.0287217 10.2002 0.000673888C6.41916 0.000673888 2.96151 2.13185 1.26392 5.51234L4.58561 8.08813C5.37562 5.71811 7.59131 3.95805 10.2002 3.95805Z'
        fill='#EA4335'
      />
    </g>
    <defs>
      <clipPath id='clip0_85_580'>
        <rect width={20} height={20} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export default function Login() {
  const { register, handleSubmit } = useForm();

  return (
    <div className='flex h-full max-h-full flex-col overflow-hidden bg-muted font-pjs md:p-10'>
      {/* <div className='flex flex-1-fix '> */}
        <div className='flex flex-1 overflow-hidden rounded-3xl border border-border bg-white'>
          <div className='w-full overflow-y-auto p-6 flex-1 sm:p-16'>

            <Button variant="link" className="p-0 text-foreground" icon={ArrowLeftIcon}>
              Back
            </Button>

            <h1 className='text-3xl font-semibold text-[#1E1E1E] max-md:text-xl'>
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
          <div className='flex-1 max-lg:hidden'>
            <img
              src='/hero7.jpg'
              className='h-full w-full max-w-full object-cover'
            />
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
