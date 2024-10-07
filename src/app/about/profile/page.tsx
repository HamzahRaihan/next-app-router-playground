'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

export default function ProfilePage() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Profile Page</h1>
      <h1>{session?.user?.name}</h1>
    </div>
  );
}
