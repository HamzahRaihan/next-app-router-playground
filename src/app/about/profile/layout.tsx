import React from 'react';

export default function ProfileLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <h1>Profile Layout</h1>
      <div>{children}</div>
    </>
  );
}
