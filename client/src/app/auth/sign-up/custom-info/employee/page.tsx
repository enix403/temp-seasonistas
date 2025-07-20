"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon } from "lucide-react";

import { useForm } from "react-hook-form";

import { AuthPage } from "@/app/auth/common/AuthPage";

import { Form, FormField } from "@/components/ui/form";
import { SimpleFormItem } from "@/components/form/SimpleFormItem";
import { Checkbox } from "@/components/ui/checkbox";

import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { AvatarChanger } from "@/components/form/file-input/AvatarChanger";

interface JobCategory {
  id: string;
  label: string;
  description: string;
}

const jobCategories: JobCategory[] = [
  {
    id: "hospitality",
    label: "Hospitality",
    description:
      "Front desk staff, housekeeping supervisors, and guest service professionals for hotels/resorts"
  },
  {
    id: "agriculture",
    label: "Agriculture",
    description:
      "Farm supervisors, crop management assistants, and agri-equipment operators"
  },
  {
    id: "construction",
    label: "Construction",
    description:
      "Electrical/plumbing technicians, safety inspectors, and heavy equipment operators"
  },
  {
    id: "tourism",
    label: "Tourism",
    description:
      "Tour guides, travel coordinators, and hospitality staff for resorts/tour operators"
  },
  {
    id: "construction2",
    label: "Construction",
    description:
      "Electrical/plumbing technicians, safety inspectors, and heavy equipment operators"
  },
  {
    id: "logistics",
    label: "Logistics",
    description:
      "Warehouse supervisors, delivery coordinators, and supply chain assistants"
  }
];

interface FormValues {
  phone: string;
  location: string;
  description: string;
  jobCategories: string[];
}

export default function CandiateInfo() {
  const form = useForm<FormValues>({
    defaultValues: {
      phone: "",
      location: "",
      description: "",
      jobCategories: ["hospitality", "construction2"] // Pre-selected categories
    },
    mode: "onBlur"
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <AuthPage
      title='Create an Account'
      subtitle='Use the contact information you want users to use to contact you.'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='col-span-full'>
              <AvatarChanger initialImageSrc={"/pfp-1.png"} />
            </div>

            {/* Phone Field */}
            <FormField
              control={form.control}
              name='phone'
              rules={{
                required: "Phone number is required"
              }}
              render={({ field }) => (
                <SimpleFormItem>
                  <Input placeholder='Contact phone' {...field} />
                </SimpleFormItem>
              )}
            />

            {/* Location Field */}
            <FormField
              control={form.control}
              name='location'
              rules={{ required: "Location is required" }}
              render={({ field }) => (
                <SimpleFormItem>
                  <Input placeholder='Location' {...field} />
                </SimpleFormItem>
              )}
            />
          </div>

          {/* Description Field */}
          <FormField
            control={form.control}
            name='description'
            rules={{
              required: "Description is required",
              maxLength: {
                value: 500,
                message: "Description cannot exceed 500 characters"
              }
            }}
            render={({ field }) => (
              <SimpleFormItem>
                <Textarea
                  placeholder='Enter Short Description'
                  className='min-h-[120px]'
                  {...field}
                />
              </SimpleFormItem>
            )}
          />

          {/* Job Categories Section */}
          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-medium'>
                Jobs you want to showcase on your profile
              </h3>
              <p className='text-sm text-gray-500'>
                Select job categories and specializations, and set your
                experience level for each.
              </p>
            </div>

            <div className='grid grid-cols-1 justify-items-stretch gap-4 md:grid-cols-2'>
              {jobCategories.map(category => (
                <FormField
                  key={category.id}
                  control={form.control}
                  name='jobCategories'
                  render={({ field }) => (
                    <FormLabel>
                      <FormItem className='flex h-full flex-row items-start space-y-0 space-x-1.5 rounded-xl border p-3.5'>
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(category.id)}
                            onCheckedChange={checked => {
                              const updatedCategories = checked
                                ? [...field.value, category.id]
                                : field.value.filter(
                                    value => value !== category.id
                                  );
                              field.onChange(updatedCategories);
                            }}
                          />
                        </FormControl>
                        <div className='space-y-1 leading-none'>
                          <p className='font-medium'>{category.label}</p>
                          <p className='text-sm text-gray-500'>
                            {category.description}
                          </p>
                        </div>
                      </FormItem>
                    </FormLabel>
                  )}
                />
              ))}
            </div>
          </div>

          <div className='flex justify-end'>
            <Button
              type='submit'
              className='mt-6 min-w-md'
              size='lg'
              effect='expandIcon'
              icon={ArrowRightIcon}
              iconPlacement='right'
            >
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </AuthPage>
  );
}
