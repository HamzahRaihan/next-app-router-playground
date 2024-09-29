import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
};

export default function Layout({ children, products, analytics }: Readonly<LayoutProps>) {
  return (
    <div className="p-4 container mx-auto">
      <div>{children}</div>
      <div className="flex gap-2 justify-center items-center">
        {products}
        {analytics}
      </div>
    </div>
  );
}
