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
import { useLogin } from "@/hooks/useLogin";
import { useMutation } from "@tanstack/react-query";
import { apiRoutes } from "@/lib/api-routes";
import { ErrorDisplay } from "@/components/ErrorDisplay";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const loginApp = useLogin();

  const loginMut = useMutation({
    mutationFn: apiRoutes.login,
    onSuccess: ({ accessToken, user }) => {
      console.log(accessToken, user);
      loginApp(user, accessToken);
    }
  });

  const onSubmit = handleSubmit(values => {
    loginMut.mutate(values as any);
  });

  return (
    <AuthPage
      title='Login into your Account'
      subtitle='Use your company email to hire and collaborate with your team.'
      rightPane={
        <>
          <AuthQuote>
            <AnimatedColorfulText>
              Sign up in just 2 minutes.
            </AnimatedColorfulText>{" "}
            win seasons with <br />
            the right talent.
          </AuthQuote>
          {/* <Testimonials className='mt-20 xl:mt-24' /> */}
        </>
      }
    >
      <Button variant='outline' className='w-full' asChild>
        <a href='#'>
          {GoogleIcon}
          Sign in with Google
        </a>
      </Button>

      <div className='relative my-6 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
        <span className='relative z-10 bg-background px-3 text-muted-foreground'>
          Sign In with Other Email
        </span>
      </div>

      <ErrorDisplay
        error={loginMut.error}
        map={{
          val_err: "Please fill all the input fields",
          invalid_creds: "Invalid email or password"
        }}
      />
      <form onSubmit={onSubmit} className='grid gap-6'>
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
          loading={loginMut.isPending}
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
          <Link href='/auth/sign-up'>Sign up</Link>
        </Button>
      </div>
    </AuthPage>
  );
}

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
