'use client';
import { useRouter } from 'next/navigation';
import React, { MouseEventHandler, useRef } from 'react';

export default function Modal({ children }: Readonly<{ children: React.ReactNode }>) {
  const overlay = useRef(null);
  const router = useRouter();
  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };
  return (
    <button type="button" ref={overlay} className="fixed z-10 left-0 top-0 bottom-0 mx-auto bg-black/10" onClick={close}>
      <div className="absolute">{children}</div>
    </button>
  );
}
