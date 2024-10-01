'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

type Session = {
  data: {
    user: {
      name: string;
      email: string;
      role: 'admin' | 'customer';
    };
  } | null;
  status: 'authenticated' | 'loading' | 'unauthenticated';
};

export default function DashboardPage() {
  const { data: session, status } = useSession() as Session;
  console.log('🚀 ~ DashboardPage ~ session:', session?.user.role, status);
  // const router = useRouter();

  // useEffect(() => {
  //   if (status == 'unauthenticated') {
  //     router.push('/login');
  //   }
  //   if (status == 'authenticated' && session?.user.role !== 'admin') {
  //     router.push('/login');
  //   }
  // }, [router, status, session?.user.role]);

  return (
    <div className="flex justify-center items-center border-2 border-black rounded-lg bg-orange-200 h-96 w-full">
      <h1>DashboardPage</h1>
    </div>
  );
}
