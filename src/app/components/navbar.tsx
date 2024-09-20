import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="flex justify-between bg-zinc-300 py-2 items-center px-4">
      <Link href="/" className="cursor-pointer">
        Logo
      </Link>
      <div className="flex gap-2">
        <Link href="/about" className="rounded-lg bg-zinc-400 px-3 py-1 cursor-pointer">
          About
        </Link>
        <Link href="/about/profile" className="rounded-lg bg-zinc-400 px-3 py-1 cursor-pointer">
          Profile
        </Link>
        <Link href="" className="rounded-lg bg-zinc-400 px-3 py-1 cursor-pointer">
          Sign In
        </Link>
      </div>
    </div>
  );
}
