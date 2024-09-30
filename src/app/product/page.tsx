import React from 'react';
import { ProductCard } from './components/card';
import { ProductProps } from '@/app/types/product';
import { getData } from '@/services/products';

export default async function ProductPage() {
  const products = await getData('http://localhost:3000/api/products');
  return (
    <div className="container mx-auto px-4">
      <h1>Product Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-2 place-items-center">
        {products.products.map((product: ProductProps) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
