'use client';

import React, { useState } from 'react';

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <div>{children}</div>;
    </>
  );
}
