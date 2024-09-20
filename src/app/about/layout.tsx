import React from 'react';

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <nav className="fixed right-0 z-10 h-screen w-60 bg-zinc-400">
        <ul className="text-white p-5">
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
