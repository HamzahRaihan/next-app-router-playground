'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React from 'react';
import NavButton from './button-nav';

const pathRoute = [
  { path: '/product', name: 'Product' },
  { path: '/about', name: 'About' },
  { path: '/about/profile', name: 'Profile' },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex justify-between bg-zinc-300 py-2 items-center px-4">
      <Link href="/" className="cursor-pointer">
        Logo
      </Link>
      <div className="flex gap-2">
        {pathRoute.map((item) => (
          <NavButton key={item.name} path={item.path} name={item.name} />
        ))}
        <button type="button" className="bg-white rounded-xl px-3 py-1" onClick={() => router.push('/login')}>
          Login
        </button>
      </div>
    </div>
  );
}
