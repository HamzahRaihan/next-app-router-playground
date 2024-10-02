import Link from 'next/link';

import React from 'react';
import NavButton from './button-nav';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Session } from '../types/session';

const pathRoute = [
  { path: '/product', name: 'Product' },
  { path: '/about', name: 'About' },
  { path: '/about/profile', name: 'Profile' },
];

export default function Navbar() {
  const { data: session } = useSession() as Session;
  return (
    <div className="flex justify-between bg-zinc-300 py-2 items-center px-4">
      <Link href="/" className="cursor-pointer">
        Logo
      </Link>
      <div className="flex gap-2">
        {pathRoute.map((item) => (
          <NavButton key={item.name} path={item.path} name={item.name} />
        ))}
        {session ? (
          <>
            <div className="bg-white rounded-lg p-1 text-black">
              <h1>{session?.user?.fullname}</h1>
            </div>
            <button className="bg-white rounded-xl px-3 py-1" onClick={() => signOut()}>
              Logout
            </button>
          </>
        ) : (
          <button type="button" className="bg-white rounded-xl px-3 py-1" onClick={() => signIn()}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}
