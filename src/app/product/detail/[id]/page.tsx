import { ProductProps } from '@/app/types/product';
import { getData } from '@/services/products';
import Image from 'next/image';
import React from 'react';

export default async function DetailProduct({ params }: Readonly<{ params: { id: number } }>) {
  const { products }: { products: ProductProps } = await getData(`http://localhost:3000/api/products?id=${params.id}`);

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/3 mx-auto border-2 border-black rounded-xl p-2">
        <Image src={products.image} alt="product-image" width={500} height={500} />
        <div>
          <h1 className="text-xl font-bold">{products.product_name}</h1>
          <h1 className="text-md">Price:$ {products.price}</h1>
        </div>
      </div>
    </div>
  );
}
