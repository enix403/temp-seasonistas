"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon } from "lucide-react";

import { useForm } from "react-hook-form";

import { AuthPage } from "@/app/auth/common/AuthPage";
import { AuthQuote } from "@/app/auth/common/AuthQuote";
import { AnimatedColorfulText } from "@/app/auth/common/AnimatedColorfulText";

import { Form, FormField } from "@/components/ui/form";
import { SimpleFormItem } from "@/components/form/SimpleFormItem";
import { AvatarChanger } from "@/components/form/file-input/AvatarChanger";

export default function EmployerInfo() {
  const form = useForm({
    defaultValues: {
      companyName: "",
      personName: "",
      companyIndustry: "",
      companyAddress: "",
      companyPhone: ""
    },
    mode: "onBlur"
  });

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <AuthPage
      title='Create an Account'
      subtitle='Use your company email to hire and collaborate with your team.'
      rightPane={
        <>
          <AuthQuote>
            <AnimatedColorfulText>Scale smarter</AnimatedColorfulText> with
            seasonal talent stay flexible.
          </AuthQuote>
          {/* <Testimonials className='mt-20 xl:mt-24' /> */}
        </>
      }
    >
      <Form {...form}>
        <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
          {/* <AvatarChanger initialImageSrc={"/pfp-1.png"} /> */}

          <FormField
            name='companyName'
            rules={{ required: true }}
            render={({ field }) => (
              <SimpleFormItem label='Company Name'>
                <Input placeholder='Enter Company Name' {...field} />
              </SimpleFormItem>
            )}
          />

          <FormField
            name='personName'
            rules={{ required: true }}
            render={({ field }) => (
              <SimpleFormItem label='Person Name'>
                <Input placeholder='Enter Person Name' {...field} />
              </SimpleFormItem>
            )}
          />

          <FormField
            name='companyIndustry'
            rules={{ required: true }}
            render={({ field }) => (
              <SimpleFormItem label='Company Industry'>
                <Input placeholder='Enter Company Industry' {...field} />
              </SimpleFormItem>
            )}
          />

          <FormField
            name='companyAddress'
            rules={{ required: true }}
            render={({ field }) => (
              <SimpleFormItem label='Company Address'>
                <Input placeholder='Enter Company Address' {...field} />
              </SimpleFormItem>
            )}
          />

          <FormField
            name='companyPhone'
            rules={{ required: true }}
            render={({ field }) => (
              <SimpleFormItem label='Company Phone'>
                <Input placeholder='Enter Company Phone' {...field} />
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
    </AuthPage>
  );
}
