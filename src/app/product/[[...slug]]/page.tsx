import React, { Suspense } from 'react';
import { ProductCard } from '../components/card';
import { ProductProps } from '@/app/types/product';
import Loading from './loading';

type Params = {
  params: { slug: string[] };
};

async function getData() {
  // const res = await fetch('https://fakestoreapi.com/products', {
  //   cache: 'no-store',
  // });
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'force-cache',
    next: {
      tags: ['products'],
      // revalidate: 30,
    },
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function ProductPage({ params }: Readonly<Params>) {
  const { slug } = params;
  const products = await getData();
  console.log('🚀 ~ ProductPage ~ products:', products);
  return (
    <div>
      <h1>{slug ? 'Detail Product Page' : 'Product Page'}</h1>
      {slug && (
        <>
          {slug?.[0] && <div>Category: {slug[0]}</div>}
          {slug?.[1] && <div>Gender: {slug[1]}</div>}
          {slug?.[2] && <div>id: {slug[2]}</div>}
        </>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-2 place-items-center">
        <Suspense fallback={<Loading />}>
          {products.products.map((product: ProductProps) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
