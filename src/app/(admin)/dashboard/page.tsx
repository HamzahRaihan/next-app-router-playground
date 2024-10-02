'use client';
import { Session } from '@/app/types/session';
import { useSession } from 'next-auth/react';

export default function DashboardPage() {
  const { data: session, status } = useSession() as Session;
  console.log('🚀 ~ DashboardPage ~ session:', session?.user.role, status);

  return (
    <div className="flex justify-center items-center border-2 border-black rounded-lg bg-orange-200 h-96 w-full">
      <h1>DashboardPage</h1>
    </div>
  );
}
