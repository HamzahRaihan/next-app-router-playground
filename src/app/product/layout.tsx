import { ReactNode } from 'react';

export default async function ProductLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
