'use client';
import React, { useState } from 'react';

export default function AdminProductPage() {
  const [status, setStatus] = useState<string>('');
  const revalidate = async () => {
    await fetch(`http://localhost:3000/api/revalidate?tag=products&secret=kjhasdWUIYEqkwgeamsnbd213`, {
      method: 'POST',
    }).then(async (res) => {
      const response = await res.json();
      console.log('🚀 ~ revalidate ~ response:', response);

      if (response.revalidate) {
        setStatus('Revalidate success');
      }
      if (response.status === 401) {
        setStatus('Revalidate invalid');
      }
    });
  };

  return (
    <div className="h-96 w-full bg-zinc-400 rounded-lg p-2 my-2 flex items-center justify-center">
      <h1>{status}</h1>
      <button className="border-2 rounded-lg p-2 border-black bg-black text-white" onClick={() => revalidate()}>
        Revalidate
      </button>
    </div>
  );
}
