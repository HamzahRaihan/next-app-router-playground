import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

export default function NavButton({ path, name }: Readonly<{ path: string; name: string }>) {
  const pathname = usePathname();
  return (
    <Link href={path} className={`rounded-lg px-3 py-1 cursor-pointer ${pathname === path ? 'bg-zinc-400' : 'bg-zinc-600 text-white'}`}>
      {name}
    </Link>
  );
}
