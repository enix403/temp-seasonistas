"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { BrandSheet } from "./BrandSheet";
import { PropsWithChildren, ReactNode } from "react";

export function AuthPage({
  title,
  subtitle,
  children,
  rightPane
}: {
  title: ReactNode;
  subtitle: ReactNode;
  rightPane?: ReactNode;
} & PropsWithChildren) {
  return (
    <div className='flex h-full max-h-full flex-col font-pjs md:p-10'>
      <div className='flex flex-1-fix flex-col'>
        <div
          className='mx-auto flex w-full max-w-[88rem] flex-1-fix border border-border md:rounded-3xl'
          style={{
            boxShadow: "24px 16px 94.3px 0px rgba(0, 0, 0, 0.12)"
          }}
        >
          <div className='flex-1 overflow-y-hidden'>
            <div className='h-full max-h-full overflow-y-auto p-6 sm:p-16'>
              <Button
                variant='link'
                className='p-0 text-foreground'
                icon={ArrowLeftIcon}
              >
                Back
              </Button>

              <h1 className='mt-6 text-3xl font-semibold text-[#1E1E1E] max-md:text-xl'>
                {title}
              </h1>

              <p className='mt-1 max-w-md text-gray-600 mb-6'>{subtitle}</p>

              {children}
            </div>
          </div>
          {rightPane && (
            <div className='relative flex-1-fix shrink-0 max-lg:hidden'>
              <BrandSheet className='absolute inset-0 flex flex-col items-stretch px-16 py-6 pt-28 xl:px-20'>
                {rightPane}
              </BrandSheet>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
