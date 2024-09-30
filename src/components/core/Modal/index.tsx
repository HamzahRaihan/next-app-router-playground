'use client';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, ReactNode, useRef } from 'react';

export default function Modal({ children }: Readonly<{ children: ReactNode }>) {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };

  return (
    <button type="button" ref={overlay} className="fixed h-full w-full z-10 left-0 top-0 bottom-0 mx-auto bg-black/60 cursor-default" onClick={close}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg ">{children}</div>
    </button>
  );
}
