'use client';

import { AppLayout } from "~/components/AppLayout/AppLayout";
import { TitleMark } from "~/components/decorations";
import { Button } from "~/components/Button/Button";
import clsx from "clsx";
import {
  IconBrandInstagram,
  IconMailFilled,
  IconPhoneFilled
} from "@tabler/icons-react";
import { FormLabel } from "~/components/FormLabel/FormLabel";
import { InputProps } from "react-html-props";
import { combineVisualProps } from "~/components/VisualComponent";
import { useTranslations } from 'next-intl';

function ContactInfoBlock({ Icon, title }: { Icon: any; title: string }) {
  return (
    <div className='flex flex-col items-center max-w-sm'>
      <div
        className={clsx(
          "border-black/20 border w-14 h-14 flex items-center justify-center",
          "rounded-full"
        )}
      >
        <Icon size={27} className='text-teal' />
      </div>
      {/* <h2 className='text-xl font-semibold'>{title}</h2> */}
      <h2 className='text-md text-black/50 mt-4 font-semibold'>{title}</h2>
    </div>
  );
}

function TopSection() {
  const t = useTranslations('contact');

  return (
    <>
      {/* Title */}
      <h1 className='text-4xl text-center'>
        <span className='font-bold text-teal mr-1 relative bg-bdlue-600'>
        {t('send')}
        </span>
      </h1>

      {/* Subtitle */}
      <p className='text-center text-xl font-normal text-black/50 mt-6 max-w-xl mx-auto'>
      {t('askUs')}
      </p>

      <div className='flex justify-center  gap-x-10 sm:gap-x-20 gap-y-12 mt-12'>
        <ContactInfoBlock Icon={IconBrandInstagram} title='@Seasonistas' />
        <ContactInfoBlock Icon={IconMailFilled} title='Seasonistas' />
        <ContactInfoBlock Icon={IconPhoneFilled} title='+92 311 9293 45' />
      </div>
    </>
  );
}

const ContactInput = (props: InputProps) => (
  <input
    size={1}
    {...combineVisualProps(props, {
      className: "px-2 py-2 rounded outline-none border border-gray-line-3"
    })}
  />
);

function FormSection() {
  const t = useTranslations('contact');
  return (
    <section className='mt-16'>
      <div className='flex max-md:flex-col gap-y-12 gap-x-12'>
        <FormLabel className='flex-1' label={t('yourName')}>
          <ContactInput placeholder={t('enterYourName')} />
        </FormLabel>
        <FormLabel className='flex-1' label={t('emailAddress')}>
          <ContactInput placeholder={t('enterYourEmailAddress')} />
        </FormLabel>
      </div>
      <FormLabel label={t('yourMessage')} className='mt-8'>
        <ContactInput placeholder={t('enterYourMessage')} />
      </FormLabel>

      <Button className='mx-auto mt-16' fullRounded>
      {t('submit')}
      </Button>
    </section>
  );
}

export default function ContactUs() {
  return (
    <AppLayout>
      <div className='app-container w-full pt-14 pb-20'>
        <TopSection />
        <FormSection />
      </div>
    </AppLayout>
  );
}
