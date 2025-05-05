"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Zap } from "lucide-react";
import { RoundPill } from "./RoundPill";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);

    // You would typically send the form data to your backend here
    console.log("Form submitted:", formData);
  };

  return (
    <section id='contact-us' className='container mx-auto px-4 py-16'>
      <div className='flex flex-col gap-12 lg:flex-row'>
        {/* Left Column */}
        <div className='flex-1 space-y-4'>
          <RoundPill label='Contact Us' />

          <h1 className='text-[#1E1E1E] max-md:text-4xl'>
            Got Questions?
            <br />
            We Can Help!
          </h1>

          <p className='mb-8 text-gray-600'>
            Feel free to contact us for any questions or assistance – we're here
            to support you.
          </p>

          <div className='flex items-center gap-4'>
            <div className='shrink-0 rounded-2xl bg-[#1C3C4A]/5 p-4'>
              <Zap className='size-8 fill-primary stroke-primary' />
            </div>
            <div>
              <div className='text-sm text-gray-500'>Email</div>
              <div className='font-medium'>info@seasonistas.com</div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className='flex-1'>
          <BackgroundGradient
            className='rounded-[24px] bg-white'
            containerClassName='p-0.5'
          >
            <div className='rounded-3xl bg-white p-8 shadow-xl'>
              <h3 className='mb-6 text-xl font-bold'>Contact us</h3>

              <form onSubmit={handleSubmit}>
                <div className='mb-6 grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='name'
                      className='mb-1 block text-sm font-medium text-gray-700'
                    >
                      Name*
                    </label>
                    <Input
                      id='name'
                      name='name'
                      placeholder='Enter Name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='mb-1 block text-sm font-medium text-gray-700'
                    >
                      Phone number
                    </label>
                    <Input
                      id='phone'
                      name='phone'
                      placeholder='Enter Number'
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='mb-1 block text-sm font-medium text-gray-700'
                    >
                      Email*
                    </label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='Enter Email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='subject'
                      className='mb-1 block text-sm font-medium text-gray-700'
                    >
                      Subject
                    </label>
                    <Input
                      id='subject'
                      name='subject'
                      placeholder='Enter Subject'
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className='mb-6'>
                  <label
                    htmlFor='message'
                    className='mb-1 block text-sm font-medium text-gray-700'
                  >
                    Your Message
                  </label>
                  <Textarea
                    id='message'
                    name='message'
                    placeholder='Description'
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type='submit'
                  className='w-full'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </form>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </section>
  );
}
