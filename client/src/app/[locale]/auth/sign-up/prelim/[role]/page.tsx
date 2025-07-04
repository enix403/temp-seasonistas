"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { useForm } from "react-hook-form";

import { AuthPage } from "../../../common/AuthPage";
import { AuthQuote } from "../../../common/AuthQuote";
import { AnimatedColorfulText } from "../../../common/AnimatedColorfulText";
import { Testimonials } from "../../../common/Testimonials";

import {
  PasswordInput,
  PasswordInputWithStrength
} from "@/components/form/PasswordInput";
import { Form, FormField } from "@/components/ui/form";
import { SimpleFormItem } from "@/components/form/SimpleFormItem";
import { DatePicker } from "@/components/form/DatePicker";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useParams, useRouter } from "next/navigation";

export default function PrelimForm() {
  const { role } = useParams<{ role: string }>();
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: ""
    },
    mode: "onBlur"
  });
  const { getValues } = form;
  const router = useRouter();

  const onSubmit = values => {
    console.log(values);
    router.push(`/auth/sign-up/${role}`);
  };


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
      <Form {...form}>
        <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name='firstName'
            rules={{
              required: "Please your first name"
            }}
            render={({ field }) => (
              <SimpleFormItem label='First Name'>
                <Input placeholder='Enter your first name' {...field} />
              </SimpleFormItem>
            )}
          />
          <FormField
            name='lastName'
            rules={{
              required: "Please your last name"
            }}
            render={({ field }) => (
              <SimpleFormItem label='Last Name'>
                <Input placeholder='Enter your last name' {...field} />
              </SimpleFormItem>
            )}
          />
          <FormField
            name='dateOfBirth'
            rules={{
              required: "This is required"
            }}
            render={({ field }) => (
              <SimpleFormItem
                // noControl
                label='Date of birth'
              >
                <DatePicker {...field} />
              </SimpleFormItem>
            )}
          />
          <FormField
            name='email'
            rules={{
              required: "Please enter your email"
            }}
            render={({ field }) => (
              <SimpleFormItem label='Email'>
                <Input placeholder='Enter your email' {...field} />
              </SimpleFormItem>
            )}
          />
          <FormField
            name='password'
            rules={{
              required: "Please enter your password"
            }}
            render={({ field }) => (
              <SimpleFormItem label='Password'>
                <PasswordInputWithStrength
                  placeholder='Enter a good password'
                  {...field}
                />
              </SimpleFormItem>
            )}
          />
          <FormField
            name='confirmPassword'
            rules={{
              required: "Please confirm your password",
              validate: value =>
                value === getValues("password") || "Passwords do not match"
            }}
            render={({ field }) => (
              <SimpleFormItem label='Confirm Password'>
                <PasswordInput placeholder='Enter password again' {...field} />
              </SimpleFormItem>
            )}
          />
          <FormField
            name='over18'
            rules={{
              validate: value => value === true || "Please confirm this"
            }}
            render={({ field }) => (
              <SimpleFormItem>
                <Label className='flex cursor-pointer items-center gap-2'>
                  <Checkbox
                    {...field}
                    checked={field.value}
                    onCheckedChange={value => field.onChange(value as any)}
                  />
                  <span>I am over 18 years old</span>
                </Label>
              </SimpleFormItem>
            )}
          />
          <FormField
            name='agreeTerms'
            rules={{
              validate: value => value === true || "Please confirm this"
            }}
            render={({ field }) => (
              <SimpleFormItem>
                <Label className='flex cursor-pointer items-center gap-2'>
                  <Checkbox
                    {...field}
                    checked={field.value}
                    onCheckedChange={value => field.onChange(value as any)}
                  />
                  <span>I agree with privacy policy and terms.</span>
                </Label>
              </SimpleFormItem>
            )}
          />

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
        </form>
      </Form>

      <div className='mt-4 text-center text-sm text-[#475569]'>
        Already Have an Account?{" "}
        <Button
          asChild
          variant='link'
          className='px-0 py-0 font-bold text-foreground'
          effect='hoverUnderline'
        >
          <Link href='#'>Sign in</Link>
        </Button>
      </div>
    </AuthPage>
  );
}
