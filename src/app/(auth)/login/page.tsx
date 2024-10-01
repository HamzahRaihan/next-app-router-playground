'use client';
import LoginCard from './components/card';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (status === 'authenticated') {
  //     router.back();
  //   }
  // }, [status, router]);

  return (
    <div>
      <LoginCard />
    </div>
  );
}
