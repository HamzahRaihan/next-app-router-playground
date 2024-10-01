'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status == 'unauthenticated') {
      router.push('/');
    }
  }, [router, status]);

  return (
    <div className="flex justify-center items-center border-2 border-black rounded-lg bg-orange-200 h-96 w-full">
      <h1>DashboardPage</h1>
    </div>
  );
}
