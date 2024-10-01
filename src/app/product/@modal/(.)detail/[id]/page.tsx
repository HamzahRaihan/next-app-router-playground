import { ProductProps } from '@/app/types/product';
import Modal from '@/components/core/Modal/index';
import { getData } from '@/services/products';
import Image from 'next/image';
import React from 'react';

export default async function DetailProduct({ params }: Readonly<{ params: { id: number } }>) {
  const { products }: { products: ProductProps } = await getData(`http://localhost:3000/api/products?id=${params.id}`);

  return (
    <Modal>
      <Image className="object-cover" src={products.image} alt="product-image" width={300} height={300} priority />
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-xl font-bold">{products.product_name}</h1>
        <h1 className="text-md">Price: ${products.price}</h1>
      </div>
    </Modal>
  );
}
