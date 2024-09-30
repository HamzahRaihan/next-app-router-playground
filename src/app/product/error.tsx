'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: Readonly<{ error: Error & { digest?: string }; reset: () => void }>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong</h1>
      <button onClick={() => reset()}>Try Again?</button>
    </div>
  );
}
