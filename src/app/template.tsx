'use client';

import { usePathname } from 'next/navigation';
import Navbar from './components/navbar';

// import React, { useState } from 'react';
const handleNavbar = ['/login', '/register'];
export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  // const [count, setCount] = useState<number>(0);
  const pathname = usePathname();
  return (
    <>
      {/* <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Click</button> */}
      {!handleNavbar.includes(pathname) && <Navbar />}
      {children}
    </>
  );
}
