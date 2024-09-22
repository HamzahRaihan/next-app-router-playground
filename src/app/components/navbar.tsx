'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex justify-between bg-zinc-300 py-2 items-center px-4">
      <Link href="/" className="cursor-pointer">
        Logo
      </Link>
      <div className="flex gap-2">
        <Link href="/about" className={`rounded-lg px-3 py-1 cursor-pointer ${pathname === '/about' ? 'bg-zinc-400' : 'bg-zinc-600 text-white'}`}>
          About
        </Link>
        <Link href="/about/profile" className={`rounded-lg px-3 py-1 cursor-pointer ${pathname === '/about/profile' ? 'bg-zinc-400' : 'bg-zinc-600 text-white'}`}>
          Profile
        </Link>
        <button type="button" className="bg-white rounded-xl px-3 py-1" onClick={() => router.push('/login')}>
          Login
        </button>
      </div>
    </div>
  );
}
