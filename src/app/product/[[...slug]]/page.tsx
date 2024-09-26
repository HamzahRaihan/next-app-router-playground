import React from 'react';
import ProductCard from '../components/card';
import { ProductProps } from '@/app/types/product';

type Params = {
  params: { slug: string[] };
};

async function getData() {
  // const res = await fetch('https://fakestoreapi.com/products');
  const res = await fetch('http://localhost:3000/api/products');
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function ProductPage({ params }: Readonly<Params>) {
  const { slug } = params;
  const products = await getData();
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
      <div className="grid grid-cols-4 gap-2 place-items-center">
        {products.products.map((product: ProductProps) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
