'use client';

import { RegisterFormSchema } from '@/app/lib/definitions';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function RegisterCard() {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterFormSchema>) {
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (res?.ok) {
        setIsLoading(false);
        push('/login');
      }
      if (res?.status === 401) {
        setIsLoading(false);
        alert('email already exist');
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Register</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form className="px-5 py-7" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="fullname" className="font-semibold text-sm text-gray-600 pb-1 block">
              Fullname
            </label>
            <input {...register('fullname')} name="fullname" id="fullname" type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" required />
            <ErrorMessage errors={errors} name="fullname" />

            <label htmlFor="email" className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input {...register('email')} name="email" id="email" type="email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" required />
            <ErrorMessage errors={errors} name="email" />

            <label htmlFor="password" className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input {...register('password')} id="password" name="password" type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" required />
            <ErrorMessage errors={errors} name="password" />

            <button
              type="submit"
              className={`${
                isLoading && 'disabled:opacity-15'
              } transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block`}
              disabled={isLoading}
            >
              <span className="inline-block mr-2">Register</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-right  whitespace-nowrap">
                <Link
                  href="/login"
                  className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-bottom	">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span className="inline-block ml-1">Already have an account</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
